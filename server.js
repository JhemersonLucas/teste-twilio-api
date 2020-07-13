require('dotenv/config');
const http = require('http');
const express = require('express');
const twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const app = express();
const cors = require('cors');
app.use(cors())
app.post('/receiver', (req, res) => {
  const twiml = new MessagingResponse();
    console.log('recebido', req)
  twiml.message('Mensagem recebida com sucesso! #Avante');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.get('/', (req, res) => {
    return res.send('Teste de API Twilio ;)')
});

app.get('/generatorCodeLogin', async (req, res) => {
  // send message whatsapp
  try{

    const twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    )
    const response_twilio = await twilioClient.messages.create({
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+553399432780',
      body: 'Olá, este é seu código de verificação: \n *1-2-3-4* \n\nbadico.cloud'
    });
    console.log(response_twilio);
    return res.json({message: 'Message sent successfully'})
  }catch(err){
    console.log(err);
    return res.json({message: 'error'})
  }
});


http.createServer(app).listen(process.env.PORT || 3333, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3333}`);
});
