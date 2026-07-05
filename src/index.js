const express = require('express');
const bodyParser = require('body-parser');

const jobs= require('./utils/job');

const { PORT } = require('./config/serverConfig');
const { createChannel } = require('./utils/messageQueue');


//const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');
const setupAndStartServer = () => {
    const app = express ();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);


    app.listen(PORT, () =>{
        console.log(`Server started at PORT: ${PORT}.`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     '',
        //     'This is a testing mail',
        //     'Hey, how are you, I hope you like support'
        // );

        // cron.schedule('*/2 * * * *', () => {
        //     console.log('Runnning the task every two minutes');
        // });
    });
}

setupAndStartServer();