const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
const cors = require('cors');
app.use(cors())
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
    console.log('recebido', req)
  twiml.message('Mensagem recebida com sucesso! #Avante');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


app.get('/', (req, res) => {
    return res.send('Olá mundao vei')
});

http.createServer(app).listen(process.env.PORT || 3333, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3333}`);
});
