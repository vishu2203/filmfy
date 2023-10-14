//INCLUDE MODULES
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());
//PUG SPECIFIC
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINT

app.get('/', (req, res) => {
    const parms = {'title': 'all movie review | filmfy.com'};
    res.status(200).render('index.pug', parms);
});

app.get('/contact', (req, res) => {
    const parms = {};
    res.status(200).render('contact.pug', parms);
});

app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const info = `The ${name} contact you and his email is: ${email} and message is: ${message}`
    fs.writeFileSync(`data.txt`, info);
    console.log(info);
    const parms = {}
    res.status(200).render(`success.pug`, parms);
});

app.get('/jawan', (req, res) => {
    const parms = {};
    res.status(200).render('jawan.pug', parms);
});

app.get('/the-nun-2', (req, res) => {
    const parms = {};
    res.status(200).render('nun_2.pug', parms);
});

app.get('/gadar-2', (req, res) => {
    const parms = {};
    res.status(200).render('gadar_2.pug', parms);
});

app.get('/jailer', (req, res) => {
    const parms = {};
    res.status(200).render('jailer.pug', parms);
});

app.get('/omg-2', (req, res) => {
    const parms = {};
    res.status(200).render('omg.pug', parms);
});

app.get('/pathaan', (req, res) => {
    const parms = {};
    res.status(200).render('pathaan.pug', parms);
});

app.get('/bholla', (req, res) => {
    const parms = {};
    res.status(200).render('bholla.pug', parms);
});

app.get('/selfiee', (req, res) => {
    const parms = {};
    res.status(200).render('selfie.pug', parms);
});

app.get('/adipurush', (req, res) => {
    const parms = {};
    res.status(200).render('adipurush.pug', parms);
});

app.get('/updates', (req, res) => {
    const parms = {};
    res.status(200).render('update.pug', parms);
});

app.get('*', (req, res) => {
    const parms = {}
    res.status(404).render(`error.pug`, parms);
});

//START THE SERVER
app.listen(port, () => {
    console.log(`your server is start on port ${port}`);
});
