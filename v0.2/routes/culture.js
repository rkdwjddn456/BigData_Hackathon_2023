const express = require('express');
const router = express.Router();
const cultureData = require('../config/culture.json');

// 문화 카테고리 라우트
router.get('/', (req, res) => {
  // 문화 관련 페이지 로직 작성
  res.render('culture', { data: cultureData });
});

module.exports = router;