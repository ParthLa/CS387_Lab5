const Prod = require('../models/prod');
const Cart = require('../models/cart');

exports.get_test = (req,res,next) => {

    var carts = Cart.get_all();
    var credits = Cart.get_cred();

    credits.then((credits) => {
        console.log(credits.rows)
        carts.then((result) => {
            res.render('cart', {
            pageTitle: 'All Products',
            path: '/cart',
            editing: false,
            carts: result.rows,
            credits: credits.rows[0].credit
    });
})});
};

exports.post_test = (req,res,next) => {
     
    const product_id = req.body.product_id;

    const cart_prod = new Cart(1, product_id);

    const info = Prod.get_info(product_id);

    console.log(info);
  
    //const prod = new Prod(info.title, info.image, info.price, info.quantity);
    //console.log(info);

     	if(info.quantity > 0){
     		Prod.reduce_quantity(product_id);
     		//cart_prod.inc_quantity()
            cart_prod.add_to_cart();
            
            res.redirect('/cart');
         	
            //.catch(err => console.log(err));
     	}
     	else{
     		//cart_prod
    
            //.then(() => {
             	res.redirect('/prods');
         	//})
         	//.catch(err => console.log(err));
     	}

 };
