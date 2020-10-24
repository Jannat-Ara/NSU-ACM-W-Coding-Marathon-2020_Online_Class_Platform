import React from 'react';
const Cart = (props) => {
    const cart =props.cart;
    const item = cart[1];
    
    console.log(item);
    const cart_Style ={
        width:'300px',
        height:'300px',
        backgroundColor:'brown',
    }
    return (
        <div style ={cart_Style}>
            <h4>Cart History</h4>
            <p>Courses Bought:{cart.length}</p>
            
        </div>
    );
};

export default Cart;