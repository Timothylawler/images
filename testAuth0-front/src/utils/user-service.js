import { 
  ApiService
} from './';

/*  Constants */
const USER_PROFILE = "USER_PROFILE";
const apiService = new ApiService();

export function getUser(){
  return new Promise((resolve, reject) => {
    apiService.getUserProfile()
      .then(res => {
        console.log("USER2",res);
        setUser(res);
        resolve(res);
      })
      .catch(error => {
        //  TODO do something when we dont have a user...
      })
  })
}

function setUser(user){
  localStorage.setItem(USER_PROFILE, JSON.stringify(user));
  return user;
}

function getUserFromStorage(){
  return JSON.parse(localStorage.getItem(USER_PROFILE));
}