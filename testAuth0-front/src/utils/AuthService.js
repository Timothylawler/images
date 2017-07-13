import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth0-js';
import { ApiService } from './';
import { 
  AUDIENCE, 
  CLIENT_DOMAIN, 
  CLIENT_ID, 
  REDIRECT, 
  SCOPE
} from './conf';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const USER_ID_KEY = 'user_id_key';



var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN,
  scope: SCOPE
});


export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  clearUserId()
  browserHistory.push('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

function getUserProfile(){
  let accessToken = getAccessToken();
  return new Promise((resolve, reject) => {
    auth.client.userInfo(accessToken, (err, profile) => {
      if(profile){
        //  Got id at profile.sub
        console.log(profile);
        localStorage.setItem(USER_ID_KEY, profile.sub);
        resolve()
      }
      else {
        console.log("error getting user profile");
        console.log(err);
        reject();
      }
    });
  })
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function clearUserId() {
  localStorage.removeItem(USER_ID_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  if(accessToken){
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);  
  }
}


// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  if(idToken){
    localStorage.setItem(ID_TOKEN_KEY, idToken);  
  }
}

export function isLoggedIn() {
  const idToken = getIdToken();
  console.log("IDTOKEN:", idToken)
  if(idToken == null){
    return false;
  }
  else{
    return !!idToken && !isTokenExpired(idToken);    
  }
}

//  Post user id and access token to backend
export function postUserToBackend(){
  return new Promise((resolve, reject) => {
    let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if(accessToken){
      getUserId()
        .then(res => {
          console.log("SENDING TO BACKEND: ", res, accessToken);
          sendToBackend(res, accessToken)
            .then(() => {
              resolve();
            })
            .catch(err => {
              //  Handle error
            });
        })
    }

  })
}

function sendToBackend(userId, accessToken){
  return new Promise((resolve, reject) => {
    let apiServie = new ApiService();
    apiServie.postUser(userId, accessToken)
      .then(res => {
        resolve();
      })
      .catch(error => {
        reject();
      })
  })
}

function getUserId(){
  return new Promise((resolve, reject) => {
    if(!localStorage.getItem(USER_ID_KEY)){
      getUserProfile()
        .then(res => resolve(localStorage.getItem(USER_ID_KEY)))
    }
    else {
      resolve(localStorage.getItem(USER_ID_KEY));
    }
  })
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

