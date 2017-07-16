import { 
  ApiService
} from './';

/*  Constants */
const USER_PROFILE = "USER_PROFILE";
const apiService = new ApiService();

export function getUser(){
  return new Promise((resolve, reject) => {
    let user = getUserFromStorage();
    if(user){
      resolve(user);
    } else {
      apiService.getUserProfile()
        .then(res => {
          console.log("USER2", res);
          setUser(res);
          resolve(res);
        })
        .catch(error => {
          //  TODO do something when we dont have a user...
        })
    }
  })
}

function setUser(user){
  localStorage.setItem(USER_PROFILE, JSON.stringify(user));
  return user;
}

export function clearUserFromStorage(){
  localStorage.setItem(USER_PROFILE, null);
}

function getUserFromStorage(){
  return JSON.parse(localStorage.getItem(USER_PROFILE));
}