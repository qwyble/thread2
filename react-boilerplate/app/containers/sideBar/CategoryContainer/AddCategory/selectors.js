import { createSelector } from 'reselect';
import { sideBarState } from 'containers/sideBar/SideBar/selectors';


export const makeSelectIsCatLoading = () => createSelector(
  sideBarState,
  state => state.get('isCatLoading')
);

export const makeSelectCatError = () => createSelector(
  sideBarState,
  state => state.get('catError')
);
