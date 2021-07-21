const express = require('express');
const { checkAdmin } = require('../../Middleware/authMiddleware');
const { addItem } = require('../../controllers/Items/createItem');
const { getAllItems } = require('../../controllers/Items/getAllItems');
const { getOneItem } = require('../../controllers/Items/getOneItem');
const { updateItem } = require('../../controllers/Items/updateItem');
const { deleteItem } = require('../../controllers/Items/deleteItem');


const router = express.Router();

router.post('/', checkAdmin, addItem);
router.get('/', getAllItems);
router.get('/:id', getOneItem);
router.put('/:id', checkAdmin, updateItem);
router.delete('/:id', checkAdmin, deleteItem);

module.exports = {
    routes: router
}