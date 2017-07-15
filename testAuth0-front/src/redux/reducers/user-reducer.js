import {
  SET_USER,
  UPDATE_USER,
  CLEAR_USER
} from '../actions';

const initialState = {
  user: {}
}

export function userReducer(state = initialState, action){
  switch(action.type){
    case SET_USER:
      return{...state, user: action.data}
      break;

    case UPDATE_USER:
      return{...state, user: action.data}
      break;

    case CLEAR_USER: 
      return {...state, user: initialState.user}
      break;

    default:
      return state;
  }
}