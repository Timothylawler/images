export const SET_CURRENT_IMAGE = "SELECTED_CURRENT_IMAGE";
export const CLEAR_CURRENT_IMAGE = "CLEAR_CURRENT_IMAGE";

export function setCurrentImage(image){
  return {
    type: SET_CURRENT_IMAGE,
    data: image
  }
}

export function clearCurrentImage(){
  return {
    type: CLEAR_CURRENT_IMAGE
  }
}