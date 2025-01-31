const nodemailer = require("nodemailer");

const emailManager = async (to, text, html, subject) => {

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "75d89201d1b5d1",
            pass: "54004eb2a83745"
        },
    });

    await transport.sendMail({
        to: to,
        from: "info@expensetracker.com",
        text: text,
        html: html,
        subject: subject
    })

}

module.exports = emailManager;