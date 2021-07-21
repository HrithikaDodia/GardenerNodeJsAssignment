const express = require('express');
const { createAdminUser } = require('../../controllers/Users/createAdminUser');
const { createUser } = require('../../controllers/Users/createUser');
const { getUserInfo } = require('../../controllers/Users/getUserInfo');

const router = express.Router();

router.post('/', createUser);
router.post('/info', getUserInfo);
router.post('/admin', createAdminUser);

module.exports = {
    routes: router
}