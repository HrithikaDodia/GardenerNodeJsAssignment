const { admin, db, firebase } = require('../db');


const checkAuthStatus = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const user = await admin.auth().verifyIdToken(token);
        req.authId = user.uid;
        next();
    }
    catch(error){
        res.status(404).send('Unauthorized Access!!');
    }
}

const checkAdmin = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const user = await admin.auth().verifyIdToken(token);

        if(user.admin === true){
            req.authId = user.uid;
            next();
        }
        else{
            res.send('Youre not an admin!!');
        }
    }
    catch(error){
        res.status(404).send('Unauthorized Access!!');
    }
}

module.exports = {
    checkAuthStatus,
    checkAdmin
};