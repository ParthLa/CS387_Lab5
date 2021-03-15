const pool= require('../utils/database');
module.exports = class Cart{

    constructor(user_id, item_id){
        
        this.user_id = user_id;
        this.item_id = item_id;
       // this.quantity = quantity; 
    }

    // add_prod(){
    //     return pool.query('INSERT INTO products(user_id, item_id, quantity) VALUES ($1, $2, $3, $4);', [this.title, this.price, this.image, this.quantity]);
    // }
    add_to_cart(){
        return pool.query('INSERT INTO cart(user_id, item_id, 1) VALUES ($1, $2);', [this.user_id, this.item_id]);
    }
    static get_all(){
        return pool.query('SELECT title, image, price, cart.quantity as qty FROM cart, products where cart.item_id = products.id;');
    }
    inc_quantity(){
        return pool.query('UPDATE cart set quantity = quantity + 1 where item_id = $2 and user_id = $1;', [this.user_id, this.item_id]);
    }
    static get_cred(){
        return pool.query('SELECT credit FROM users where users.user_id = 1;');
    }
};
