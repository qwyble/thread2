import { createSelector } from 'reselect';
import { makeSelectSelectedCategory } from 'containers/sideBar/SideBar/selectors';

const selectOwnProps = (state, ownProps) => ownProps;


export const makeSelectPlaylistParam = () => createSelector(
  makeSelectParams,
  params => params.get('playlist')
);


export const makeSelectThisCategoryId = () => createSelector(
  selectOwnProps,
  ownProps => ownProps.category.catid
);

export const makeSelectDisplayLists = () => createSelector(
  makeSelectThisCategoryId,
  makeSelectSelectedCategory,
  (thisCatId, selectedCat) => {
    if (thisCatId === selectedCat) return true;
    return false;
  }
);
