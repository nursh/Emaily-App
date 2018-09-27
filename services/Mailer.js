const sendgrid = require('sendgrid');
const { mail: helper } = sendgrid;

class Mailer extends helper.Mail {

}

module.exports = Mailer;