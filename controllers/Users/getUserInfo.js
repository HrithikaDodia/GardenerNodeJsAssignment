const { admin, db, firebase } = require('../../db');

const getUserInfo = async (req, res) => {
    await firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(user => {
        res.send(user);
    })
    .catch(error => {
        res.send(error);
    });
};

module.exports = {
    getUserInfo
};