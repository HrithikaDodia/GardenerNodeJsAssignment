const { admin, db, firebase } = require('../../db');

const createAdminUser = async (req, res) => {
    try{
        const data = req.body;
        const user = await admin.auth().createUser(data)
        await admin.auth().setCustomUserClaims(user.uid, {admin: true});
        
        res.send('Admin created successfully!');
    }
    catch(error){
        res.send(error);
    };
}

module.exports = {
    createAdminUser
};