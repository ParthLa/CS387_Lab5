const Prod = require('../models/prod');
const Cart = require('../models/cart');


exports.get_test = (req,res,next) => {

    Prod.
        get_all()
        .then(() => {
            res.redirect('/prods');
        })
        .catch(err => console.log(err));

    res.render('prods', {
        pageTitle: 'Products',
        path: 'prods',
        editing: false
    });


};

