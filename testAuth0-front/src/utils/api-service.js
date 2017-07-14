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

  /*  Gets the current logged in users profile
   */
  getUserProfile(){
    return new Promise((resolve, reject) => {
      let url = `${options.baseUrl}/api/user/`;
      let user = {
        userName: "Tika",
        name: "Timothy Lawler Karvonen",
        id: "asdasd",
        bio: "Capturing colurful nature in south Africa. Making sure that every one sees the world as it is.",
        profileImage: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg",
        content: {
          count: 4,
          images: [
            {
              id: 1,
              text: "text",
              image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"
            },
            {
              id: 2,
              text: "text",
              image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
            },
            {
              id: 3,
              text: "text",
              image: "https://us.123rf.com/450wm/ELEN/ELEN1511/ELEN151100020/49021765-winter-nature-scenery-of-woodland-in-sunny-day.jpg?ver=6"
            },
            {
              id: 4,
              text: "text",
              image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
            },
          ]
        }
      }
      console.log("USER3",user);
      resolve(user);
      //  TODO Fix endpoint
      /*this.GET_AUTHORIZED(url)
        .then(res => {
          resolve(res.json());
        })
        .catch(error => {
          console.log("Error getting user profile: ", error);
          reject(error);
        })*/
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