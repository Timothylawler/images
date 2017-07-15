
import {
  SHOW_SPINNER,
  HIDE_SPINNER
} from '../actions';

const initialState = {
  isShowing: false,
  info: "Loading"
};

export function loadingSpinnerReducer(state = initialState, action){
  switch(action.type){
    case SHOW_SPINNER:
      return{...state, isShowing: true, info: action.info}
      break;
    case HIDE_SPINNER:
      return{...state, isShowing: false}
      break;
    default:
      return state;
  }
}