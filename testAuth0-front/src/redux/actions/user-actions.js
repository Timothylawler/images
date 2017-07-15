export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const CLEAR_USER = "REMOVE_USER";

export function setUser(user){
  return {
    type: SET_USER,
    data: user
  }
}

export function updateUser(user){
  return {
    type: UPDATE_USER,
    data: user
  }
}

export function clearUser(){
  return {
    type: CLEAR_USER
  }
}