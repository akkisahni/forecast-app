const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

const port = process.env.PORT  || 3000;
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get('', (req,res) =>{
    res.render('index', {
        title:'Home Page',
        author: 'Akhil Sahni'
    });
});

app.get('/help', (req,res) =>{
    res.render('help', {
        text: 'This is a basic help page',
        title:'Help page',
        author: 'Akhil Sahni'
    })
});

app.get('/about', (req,res) =>{
    res.render('about', {
        title:'About Page',
        author: 'Akhil Sahni'
    });
});

app.get('*', (req, res) =>{
    res.render('404', {
        title:'Error Page',
        errorMessage:'Page not found',
        author: 'Akhil Sahni'
    });
})

app.listen( port, () =>{
    console.log('Server started on Port', port);
});