const { admin, db, firebase } = require('../../db');


const deleteItem = async (req, res) => {
    const id = req.params.id;
    const item = await db.collection('items').doc(id).delete();
    res.send('Item successfully deleted!!');
}

module.exports = { deleteItem };