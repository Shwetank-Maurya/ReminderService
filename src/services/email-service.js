const TicketRepostiory = require('../repository/ticket-repository');
const sender = require('../config/emailConfig');


const repo = new TicketRepostiory();

const sendBasicEmail = async (mailFrom , mailTo , mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
        from : mailFrom,
        to: mailTo,
        subject:mailSubject,
        text:mailBody
    });
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

const fetchPendingEmails = async (timestamps) => {
    try {

        const response = await repo.get({status: "PENDING"});
        return response;

    } catch (error) {
        console.log(error);
        throw(error);
    }
}

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

const updateTicket = async(ticketId,data) => {
    try {
        const response = await repo.update(ticketId,data);
        return response;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
}