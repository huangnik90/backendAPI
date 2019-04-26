const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: "huangnik90@gmail.com",
        pass: "bgokvzwniimomyvr"
    },
    tls:{
        rejectUnauthorized:false
    }
})



module.exports = transporter