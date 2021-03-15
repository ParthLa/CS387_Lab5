const Prod = require('../models/prods');
const Cart = require('../models/cart');


exports.get_test = (req,res,next) => {

    var products = Prod.get_all();
        products.then((result) => {
            res.render('prods', {
            pageTitle: 'All Products',
            path: '/prods',
            editing: false,
            products: result.rows
    });
});


};

exports.post_test = (req,res,next) => {
     
    const product_id = req.body.product_id;
    // const qty = req.body.quantity;
    // var user_id = 1;
    const cart_prod = new Cart(1, product_id);

    const info = Prod.get_info(product_id)
    info.then(() => {
    	console.log("Hi");
        console.log(info.quantity);
    });

    //const prod = new Prod(info.title, info.image, info.price, info.quantity);
    // console.log(info);
    	// if(qty > 0){
     	if(3 > 0){
     		console.log("Hikcdv;v");
     		Prod.reduce_quantity(product_id)
     		//cart_prod.inc_quantity()
            // cart_prod
            .add_to_cart()
            .then(() => {
             	res.redirect('/cart');
         	})
         	.catch(err => console.log(err));
     	}
     	else{
     		//cart_prod
    
            //.then(() => {
             	res.redirect('/prods');
         	//})
         	//.catch(err => console.log(err));
     	}
     	// cart_prod
     	// 		.add_to_cart()
     	// 		.then(() => {
      //       		res.redirect('/cart');
      //   		})
      //   		.catch(err => console.log(err));
 };
