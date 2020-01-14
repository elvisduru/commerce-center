import React, { Component } from 'react'

export default class Api extends Component {
  async makeApiCall(options) {
    // let protocol = window.location.protocol + "//";
    // const api = protocol + window.location.hostname + "/api/";
    const api = "http://wedeyy.com/api/"
    let header = new Headers({
      "Content-Type": "multipart/form-data"
    });
    const responseData = await fetch(api, {
      header: header,
      method: "POST",
      body: options,
      credentials: "include",
      mode: "cors"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error("Error while fetching data: ", error);
      });
    return responseData;
  }

  async sample(username) {
    let fd = new FormData();
    fd.append("code", "75313");
    fd.append("dataUsername", username);
    const result = await this.makeApiCall(fd);
    console.warn("Result", result);
    return result;
  }
}



