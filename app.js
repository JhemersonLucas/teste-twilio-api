require('dotenv/config');
const twilio = require('twilio');

const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

// send message sms
// twilioClient.messages.create({
//     from: '+17732708038',
//     to: '+5533999432780',
//     body: 'Olá Jhemerson'
// }).then(console.log).catch(console.error);

// send message whatsapp
twilioClient.messages.create({
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5533999200200',
    body: 'Hello Leo (2)'
}).then(console.log).catch(console.error);

console.log(process.env.OWNER)