const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass} = require('../../config/mail.json');

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {  
    user: "e18f395be34bf6", // Erro de importação do JSON
     pass: "04ea39002c46c4" 
    },
});

transport.use('compile', hbs({
  viewEngine: {
    extname: '.html',
    layoutsDir: './src/resources/mail/',
    defaultLayout: 'forgot_password', 
    partialsDir: './src/resources/mail/',
  },
  viewPath: './src/resources/mail/',
  extName: '.html'
}));

module.exports = transport;