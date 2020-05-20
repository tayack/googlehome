const express = require('express');
const app = express();
const speech=require('./googleHomeApp.js');
const conf=require('config');

const speechObj= new speech(conf.ipaddress,conf.portNo);
app.use(express.static('mp3'));
app.use(express.static('public'));
app.use(express.static('js'));

app.get('/speech', (req, res) => {
    speechObj.speech(req.query.value);
    res.send('speechOK')
});

app.get('/animalVoice', (req, res) => {
    speechObj.speechAnimalVoice();
    res.send('animalVoice')
});

app.listen(conf.portNo, () => console.log('Listening on port '+conf.portNo));