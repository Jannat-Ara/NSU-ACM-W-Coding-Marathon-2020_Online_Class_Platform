import React from 'react';
const Cart = (props) => {
    const cart =props.cart;
    let total= 0;
    for(let i=0; i<cart.length;i++){
        const courseAdd = cart[i];
        total= total + courseAdd.price;
        console.log(total);
    } 
    
    const cart_Style ={
        width:'300px',
        height:'300px',
        backgroundColor:'brown',
    }
    return (
        <div style ={cart_Style}>
            <h4>Cart History</h4>
            <p>Courses Bought:{cart.length}</p>
    <p>Total Price:{total}</p>
            
        </div>
    );
};

export default Cart;