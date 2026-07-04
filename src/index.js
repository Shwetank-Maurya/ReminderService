const express = require('express');
const bodyParser = require('body-parser');

const cron = require('node-cron');

const { PORT } = require('./config/serverConfig');

//const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express ();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () =>{
        console.log(`Server started at PORT: ${PORT}.`);
        // sendBasicEmail(
        //     'support@admin.com',
        //     '',
        //     'This is a testing mail',
        //     'Hey, how are you, I hope you like support'
        // );

        cron.schedule('*/2 * * * *', () => {
            console.log('Runnning the task every two minutes');
        });
    });
}

setupAndStartServer();