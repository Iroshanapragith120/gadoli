const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('pages/index', { 
        title: 'Home',
        page: 'home'
    });
});

app.get('/products', (req, res) => {
    res.render('pages/products', { 
        title: 'Our Products',
        page: 'products'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { 
        title: 'About Us',
        page: 'about'
    });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { 
        title: 'Contact Us',
        page: 'contact'
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Indika Gadol website is live!');
});
