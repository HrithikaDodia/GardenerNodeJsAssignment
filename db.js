const firebase = require('firebase');
const config = require('./config');
const admin = require("firebase-admin");

firebase.initializeApp(config.firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(config.GOOGLE_APPLICATION_CREDENTIALS),
  databaseURL: 'https://gardener-183ea.firebaseio.com'
});

var db = admin.firestore();

module.exports = {
    admin,
    db,
    firebase
};

// const db = firebase.initializeApp(config.firebaseConfig);

// module.exports = db;