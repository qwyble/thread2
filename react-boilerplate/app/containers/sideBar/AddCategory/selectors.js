import { createSelector } from 'reselect';
import { sideBarState } from 'containers/sideBar/SideBar/selectors';


export const makeSelectIsAddCatLoading = () => createSelector(
  sideBarState,
  state => state.get('isAddCatLoading')
);

export const makeSelectAddCatError = () => createSelector(
  sideBarState,
  state => state.get('addCatError')
);
