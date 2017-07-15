export const SHOW_SPINNER = "SHOW_SPINNER";
export const HIDE_SPINNER = "HIDE_SPINNER";

export function showSpinner(text = "Loading"){
  return {
    type: SHOW_SPINNER,
    info: text
  }
}

export function hideSpinner(){
  return {
    type: HIDE_SPINNER
  }
}