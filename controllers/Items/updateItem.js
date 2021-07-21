const { admin, db, firebase } = require('../../db');

const updateItem = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const item = await db.collection('items').doc(id);
    await item.update(data);
    res.send('Updated item successfully!!');
}

module.exports = { updateItem };