const express = require('express');
const router = express.Router();

const handleLogin = require('../routesHandle/login');

router.post('/login', handleLogin);

module.exports = router;