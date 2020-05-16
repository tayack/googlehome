const express = require('express');
const app = express();
const speech=require('./googleHomeApp.js');
const portNo='4000';
const speechObj= new speech("192.168.1.11",portNo);
app.use(express.static('mp3'));
app.use(express.static('public'));
app.use(express.static('js'));
app.set("view engine","ejs");

app.get('/speech', (req, res) => {
    speechObj.speech(req.query.value);
    res.send('speechOK')
});

app.get('/animalVoice', (req, res) => {
    speechObj.speechAnimalVoice();
    res.send('animalVoice')
});


app.listen(portNo, () => console.log('Listening on port '+portNo));