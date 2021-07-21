const { admin, db, firebase } = require('../../db');

const getOneOrder = async (req, res) => {
    const id = req.params.id;
    const order = await db.collection('orders').doc(id);
    const data = await order.get();
    const orderArr = await data.data();
    res.send(orderArr);
}

module.exports = { getOneOrder };