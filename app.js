const { match } = require('assert');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

//express app
const app = express();

//connect to MongoDB and mongoose
const dbURI = 'mongodb+srv://ebbe-karlstad:jpvxPrsr6DrXkRG6@cluster0.rpd3scg.mongodb.net/litary-db?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);

mongoose.connect(dbURI)
    .then((result) => app.listen(4000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');  //looks only in 'views' folder!

//middleware static files (css)
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


//redirect to html pages
app.get('/', (req, res) =>{
    res.render('index', {title: 'Välkommen'});
});

app.get('/contact', (req, res) =>{
    res.render('contact', {title: 'Kontakt'});
});

app.use(formRoutes);    //Use code from formRoutes.js

app.use((req, res) =>{
    res.status(404).render('404', {title: 'Error 404'});
}); 