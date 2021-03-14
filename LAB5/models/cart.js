const pool= require('../utils/database');
module.exports = class Cart{

    constructor( item_id, quantity){
        // this.title = title;
        // this.image = image;
        // this.price = price;
        this.user_id = 1;
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
        return pool.query('SELECT * FROM cart');

    }

};