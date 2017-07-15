import {SET_CURRENT_IMAGE, CLEAR_CURRENT_IMAGE} from '../actions';

const initialState = {
  image: {}
}

export function currentImageReducer(state = initialState, action){
  switch(action.type){
    case SET_CURRENT_IMAGE:
      return{...state, image: action.data}
      break;
    case CLEAR_CURRENT_IMAGE:
      return{...state, image: initialState.image}
      break;
    default: 
      return state;
  }
}

