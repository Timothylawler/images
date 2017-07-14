import {
  SHOW_DROPDOWN,
  HIDE_DROPDOWN
} from '../actions';

const initialState = {
  isDropdownShowing: ""
};

export function navbarReducer(state = initialState, action) {
  switch(action.type){
    case SHOW_DROPDOWN:
      return{...state, isDropdownShowing: "show"}
      break;

    case HIDE_DROPDOWN:
      return{...state, isDropdownShowing: ""}
      break;

    default:
      return state;
  }
}