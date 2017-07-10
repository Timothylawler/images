import { getAccessToken } from './';

let options = {
  baseUrl: "http://localhost:4000",
}


class ApiService {
  getFirstSection(data){
    return new Promise((resolve, reject) => {
      let url = `${options.baseUrl}/api/first`;
      this.GET(url, data)
        .then(res => {
          resolve(res.json());
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  getSecondSection(data){
    return new Promise((resolve, reject) => {
      let url = `${options.baseUrl}/api/second`;
      this.GET_AUTHORIZED(url, data)
        .then(res => {
          resolve(res.json());
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  
  /*  POST */

  /* USER */
  postUser(userId, accessToken){
    return new Promise((resolve, reject) => {
      let url = `${options.baseUrl}/api/user/`;
      this.POST_AUTHORIZED(url, {userId: userId, accessToken: accessToken})
        .then(res => {
          resolve();
        })
        .catch(error => {
          //  TODO handle error
          console.log(error);
        })
    })
  }

  GET(url, data){
    let init = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET",
      body: data
    }
    return fetch(url, init);
  }

  GET_AUTHORIZED(url, data){
    let init = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
      },
      method: "GET",
      body: data
    }
    return fetch(url, init);
  }

  POST(url, data){

  }

  POST_AUTHORIZED(url, data){
    let init = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
      },
      method: "POST",
      body: JSON.stringify(data)
    }
    return fetch(url, init);
  }
}

export {ApiService};