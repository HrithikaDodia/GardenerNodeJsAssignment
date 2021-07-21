const { admin, db, firebase } = require('../../db');

const addItem = async (req, res) => {
    const data = req.body;
    const item = await db.collection('items').doc().set(data);
    res.send('Item successfully created!!');
}

module.exports = { addItem };