const express = require('express');
const global = require('./global/environment');
const dbConfig = require('./config/db');

const app = express();

require('./models/User.model');

app.listen(global.PORT, () => {
    console.log('Server ON', global.PORT);
    dbConfig.sync().then(() => {
        console.log('DB on');
    })
    .catch(err => {
        console.log(err);
    })
});