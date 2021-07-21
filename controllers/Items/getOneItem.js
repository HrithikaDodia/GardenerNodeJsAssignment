const { admin, db, firebase } = require('../../db');

const getOneItem = async (req, res) => {
    const id = req.params.id;
    const item = await db.collection('items').doc(id);
    const data = await item.get();
    const itemArr = await data.data();
    res.send(itemArr);
}

module.exports = { getOneItem };