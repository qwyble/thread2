import { createSelector } from 'reselect';
import { makeSelectSelectedCategory } from 'containers/SideBar/SideBarContainer/selectors';

export const selectPlaylistState = state => state;
const selectOwnProps = (state, ownProps) => ownProps;

export const makeSelectThisCategoryId = () =>
  createSelector(
    selectOwnProps,
    ownProps => ownProps.category.catid
  );

export const makeSelectDisplayLists = () =>
  createSelector(
    makeSelectThisCategoryId,
    makeSelectSelectedCategory,
    (thisCatId, selectedCat) => {
      if (thisCatId === selectedCat) return true;
      return false;
    }
  );
