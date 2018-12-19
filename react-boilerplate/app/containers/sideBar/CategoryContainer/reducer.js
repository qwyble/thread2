import { fromJS } from "immutable";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  ADD_CATEGORY_ATTEMPT,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED
} from "./constants";

const blankError = fromJS({});

const initialState = fromJS({
  categories: fromJS({}),
  selectedPlaylist: "",
  selectedCategory: "",
  isVisible: true,
  isLoading: true,
  isAddCatLoading: false,
  error: blankError,
  addCatError: blankError
});

function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state.set("isLoading", true).set("error", blankError);
    case GET_CATEGORIES_SUCCESS:
      return state
        .set("categories", fromJS(action.cats))
        .set("isLoading", false);
    case GET_CATEGORIES_FAILED:
      return state.set("isLoading", false).set("error", fromJS(action.error));
    case ADD_CATEGORY_ATTEMPT:
      return state.set("isAddCatLoading", true).set("addCatError", blankError);
    case ADD_CATEGORY_SUCCESS:
      return state
        .set("isAddCatLoading", false)
        .update("categories", categories =>
          categories.push(fromJS(action.category))
        );
    case ADD_CATEGORY_FAILED:
      return state
        .set("isAddCatLoading", false)
        .set("addCatError", fromJS(action.error));
    default:
      return state;
  }
}

export default sideBarReducer;
