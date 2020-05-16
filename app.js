const express = require('express');
const app = express();
const speech=require('./googleHomeApp.js');
const conf=require('config');
/*
const ngrok=require('ngrok');
const url = await ngrok.connect();
*/
const speechObj= new speech("192.168.1.11",conf.portNo);
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

/*
app.listen(conf.portNo, function () {
    console.log('aiueo');
    ngrok.connect({authtoken: conf.ngrokAccessToken, addr: conf.portNo}, function (err, url) { //修正
    if (err) console.log("err");
    else
    console.log(url);
   });
  });
  */

app.listen(conf.portNo, () => console.log('Listening on port '+conf.portNo));