const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

// 템플릿 엔진 설정
app.set('view engine', 'ejs');

// 정적 파일을 제공하기 위한 폴더 설정
app.use(express.static('public'));

// 라우트 모듈들을 import
const jobsRouter = require('./routes/jobs');
const medicalRouter = require('./routes/medical');
const cultureRouter = require('./routes/culture');

// 라우트 모듈 사용 설정
app.use('/jobs', jobsRouter);
app.use('/medical', medicalRouter);
app.use('/culture', cultureRouter);

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
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

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});