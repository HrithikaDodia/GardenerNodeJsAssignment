const { admin, db, firebase } = require('../../db');

const updateOrder = async (req, res) => {
    const id = req.params.id;
    var data = req.body;
    var orderDb = await db.collection('orders').doc(id);
    var orderGet = await orderDb.get();
    var order = await orderGet.data();

    if(order.uid != req.authId)
        res.status(404).send('You can only update the orders placed by you');

    if(order["orderStatus"] == 'delivered')
        res.status(404).send('You cannot update delivered orders!');

    var totalAmount = 0;

    for(let i = 0; i < data["items"].length; i++){
        var obj = data["items"][i];
        totalAmount += parseInt(obj.itemPrice) * parseInt(obj.quantity);
    }


    if(totalAmount < 500){
        data["deliveryCharge"] = 50;
        totalAmount += 50;
    }
    else
        data["deliveryCharge"] = 0;

    data["totalAmount"] = totalAmount;

    await orderDb.update(data);
    res.send('Updated order successfully!!');
}

module.exports = { updateOrder };