const express = require('express');
const { checkAdmin, checkAuthStatus } = require('../../Middleware/authMiddleware');
const { createOrder } = require('../../controllers/Orders/createOrder');
const { updateOrder } = require('../../controllers/Orders/updateOrder');
const { getAllOrders } = require('../../controllers/Orders/getAllOrders');
const { getOneOrder } = require('../../controllers/Orders/getOneOrder');
const { deleteOrder } = require('../../controllers/Orders/deleteOrder');

const router = express.Router();

router.post('/', checkAuthStatus, createOrder);
router.put('/:id', checkAuthStatus, updateOrder);
router.get('/', checkAdmin, getAllOrders);
router.get('/:id', checkAdmin, getOneOrder);
router.delete('/:id', checkAuthStatus, deleteOrder)

module.exports = {
    routes: router
}