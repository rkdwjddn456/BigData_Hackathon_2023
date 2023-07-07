const express = require('express');
const app = express();
const axios = require('axios');

app.get("/getfriends", (req, res) => {
    axios
      .get(`https://kapi.kakao.com/v1/api/talk/friends`, {
        headers: {
          Authorization: `Bearer ${"DQMFnxwjEowINo7bvR5LeYfIky763dXQpvbfP7hRCioljwAAAYkvWQzP"}`,
        }, params: {
          offset:3,
          limit:3,
          order:'asc'
        }
      })
      .then((result) => {
        console.log('result ', result.data);
      })
      .catch((error) => {
        console.log('error ', error.response.data);
      });
  });