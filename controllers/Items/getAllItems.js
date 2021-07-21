const { admin, db, firebase } = require('../../db');

const getAllItems = async (req, res) => {
    const items = await db.collection('items');
    const data = await items.get();
    var itemsArr = [];
    data.forEach(element => {
        itemsArr.push(
            {
                id: element.id,
                name: element.data().name,
                price: element.data().price,
                description: element.data().description
            }
        )
    });
    res.send(itemsArr);
};

module.exports = { getAllItems };