const express = require('express');
const app = express();
const speech=require('./googleHomeApp.js');
const speechObj= new speech('');
app.use(express.static('mp3'));
app.use(express.static('public'));
app.use(express.static('js'));
app.set("view engine","ejs");

app.get('/speech', (req, res) => {

    speechObj.speech(req.query.value);
    res.send('speechOK')

});

app.get('/command', (req, res) => {

    speechObj.command(req.query.value);
    console.log('end');
    res.send('commandOK')
});


app.listen(3000, () => console.log('Listening on port 3000'));