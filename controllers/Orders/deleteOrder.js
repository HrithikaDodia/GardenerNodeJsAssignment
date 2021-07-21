const { admin, db, firebase } = require('../../db');


const deleteOrder = async (req, res) => {
    const id = req.params.id;
    const order = await db.collection('orders').doc(id);
    const data = await order.get();
    const orderObj = await data.data();
    
    if(orderObj.uid != req.authId)
        res.status(404).send('You can only delete the orders placed by you');

    if(orderObj["orderStatus"] == 'delivered')
        res.status(404).send('You cannot delete delivered orders!');
    
    await db.collection('orders').doc(id).delete();
    res.send('Order successfully deleted!!');
};

module.exports = { deleteOrder };