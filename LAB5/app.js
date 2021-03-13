
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRo = require('./routes/admin');
const pool =  require('./utils/database');


const app = express();

const mainRo = express.Router();
const prodCon = require('./controllers/prods')
//const cartCon = require('./controllers/cart')
//const orderCon = require('./controllers/order')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));

mainRo.get('/prods', prodCon.get_test);
//mainRo.get('/cart', cartCon.get_test);
//mainRo.post('/cart', cartCon.post_test);
//mainRo.get('/orders', orderCon.get_test);
//mainRo.post('/orders', orderCon.post_test);


app.use('/admin',adminRo);
app.use('/', mainRo)

app.listen(3000, function(){
    console.log("Server started on port 3000")
})
;
