const { admin, db, firebase } = require('../../db.js');

const createOrder = async (req, res) => {
    var data = req.body;
    data["uid"] = req.authId;
    data["orderStatus"] = "placed";

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

    const orderData = await db.collection('orders').doc().set(data);
    res.send('Order created successfully!!');
}

module.exports = {
    createOrder
};


/*
    Order schema

    {
        uid: "abcd",
        items: [
            {
                itemId: "abcdef",
                quantity: 2,
                itemPrice: 100
            },
            {
                itemId: "defghi",
                quantity: 1,
                itemPrice: 300
            }
        ],
        orderStatus: ['placed', 'delivered'],
        deliveryCharge: 0,
        totalAmount: 500 
    }

*/