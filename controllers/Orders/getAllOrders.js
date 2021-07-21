const { admin, db, firebase } = require('../../db');

const getAllOrders = async (req, res) => {
    const orders = await db.collection('orders');
    const data = await orders.get();
    var ordersArr = [];
    data.forEach(element => {
        ordersArr.push(
            {
                id: element.id,
                uid: element.data().uid,
                items: element.data().items,
                totalAmount: element.data().totalAmount,
                deliveryCharge: element.data().deliveryCharge,
                orderStatus: element.data().orderStatus
            }
        )
    });
    res.send(ordersArr);
};

module.exports = { getAllOrders };