const pool= require('../utils/database');
module.exports = class Cart{

    constructor(user_id, item_id, quantity){
        // this.title = title;
        // this.image = image;
        // this.price = price;
        this.user_id = user_id;
        this.item_id = item_id;
        this.quantity = quantity; 
    }

    // add_prod(){
    //     return pool.query('INSERT INTO products(user_id, item_id, quantity) VALUES ($1, $2, $3, $4);', [this.title, this.price, this.image, this.quantity]);
    // }
    add_to_cart(){
        return pool.query('INSERT INTO cart(user_id, item_id, quantity) VALUES ($1, $2, $3);', [this.user_id, this.item_id, this.quantity]);
    }
    static get_all(){
        return pool.query('SELECT credit, title, image, price, cart.quantity as qty FROM users, cart, products where cart.item_id = products.id and users.user_id = cart.user_id');
    }
    inc_quantity(){
        return pool.query('INSERT INTO cart(user_id, item_id, quantity) VALUES ($1, $2, $3);', [this.user_id, this.item_id, 1]);
    }
    static get_cred(){
        return pool.query('SELECT credit FROM users where users.user_id = $1;',[this.user_id]);
    }
};
