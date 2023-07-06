const express = require('express');
const router = express.Router();
const jobData = require('../config/job.json');

// 일자리 카테고리 라우트
router.get('/', (req, res) => {
  // 일자리 관련 페이지 로직 작성
  res.render('jobs', { data: jobData });
});

module.exports = router;