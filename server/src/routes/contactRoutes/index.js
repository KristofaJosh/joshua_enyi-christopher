const nodemailer = require('nodemailer');
const validateEmail = require('../../helpers/validateEmail');
require('dotenv').config();

const {Router} = require('express');

const router = Router();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Mail is up');
    }
});

router.post('/send_mail', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const file = req.body.file;
    
    if (!validateEmail(email)) {
        return res.send({state: 'fail', message: 'wrong email'})
    }
    
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;
    
    const mail = {
        from: name,
        to: 'christopherjoshua18@live.com',
        bcc: 'christopherjoshua18@gmail.com, christopherjoshua25@hotmail.com',
        subject: 'Message from Portfolio',
        text: content,
        attachment: [{path: file}],
    };
    
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.send({state: 'fail', message: 'failed'})
        } else {
            res.send({state: 'sent', message: 'sent'});
            transporter.sendMail({
                from: "Christopher Joshua",
                to: email,
                subject: "Email Delivered!",
                text: `Thank you for contacting me ${name}!
                \n\n
                I will get back to you as soon as I read this mail\n\n
                if it is urgent, you can reach me on the other links in the contact page`
            }, function (error, info) {
                if (error) {
                    // logError(error)
                    res.send({state: 'fail', message: 'failed'})
                    
                } else {
                    console.log('Message sent: ' + info.response);
                }
            });
        }
    })
});

module.exports = router;