const express = require('express');
const app = express();
const speech=require('./googleHomeApp.js');
const speechObj= new speech('');
app.use(express.static('mp3'));

app.get('/speech', (req, res) => {

    speechObj.speech(req.query.value);
    console.log('end');
    res.send('Hello')
});

app.get('/command', (req, res) => {

    speechObj.command(req.query.value);
    console.log('end');
    res.send('Hello')
});


app.listen(3000, () => console.log('Listening on port 3000'));