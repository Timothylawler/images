/*  Action consts */
export const SHOW_DROPDOWN = "SHOW_DROPDOWN";
export const HIDE_DROPDOWN = "HIDE_DROPDOWN";

/*  Actions */
export function showDropdown(){
  return {
    type: SHOW_DROPDOWN
  }
}

export function hideDropdown(){
  return {
    type: HIDE_DROPDOWN
  }
}