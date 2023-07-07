const express = require('express');
const router = express.Router();
const medicalData = require('../config/medical.json');

// 의료 카테고리 라우트
router.get('/', (req, res) => {
  // 의료 관련 페이지 로직 작성
  res.render('medical', { data: medicalData });
});

module.exports = router;