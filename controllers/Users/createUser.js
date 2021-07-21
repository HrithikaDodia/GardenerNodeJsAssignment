const { admin, db, firebase } = require('../../db');

const createUser = async (req, res) => {
    const data = req.body;
    await admin.auth().createUser(data)
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        res.send(error);
    });
}

module.exports = {
    createUser
};