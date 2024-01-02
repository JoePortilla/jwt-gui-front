import {Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "http://localhost:8080"
    axios.defaults.headers.post["Content-Type"] = "application/json"
  }

  /**
   *  I need to save the token in the frontend for the following requests. I will create two methods in the Axios
   *  service to manage the local storage access.
   */
  getAuthToken(): string | null {
    // console.log("getAuthToken->", window.localStorage.getItem("auth_token"));
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  request(method: string, url: string, data: any): Promise<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
      // console.log("headers", headers);
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }
}
