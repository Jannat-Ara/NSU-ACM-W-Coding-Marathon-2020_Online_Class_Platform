import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartArrowDown, faUser, faHome, faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const cart =props.cart;
    let total= 0;
    for(let i=0; i<cart.length;i++){
        const courseAdd = cart[i];
        total= total + courseAdd.price;
        console.log(total);
    } 
    let subtotal= total;
    if(total>=35.00){
        subtotal=total-((total/100)*10);
    }
    let discount = 0;
    if(total>=35.00){
        discount =10;
    }
    const cart_Style ={
        border: '1px solid gray',
        borderRadius:'5px',
        backgroundColor:'#AA9A9A',
        height:'350px',
        width:'300px',
        padding:'20px',
        float:'left',
        boxShadow:'5px 8px #888888',
        display:'block',
        marginLeft:'35%',
        marginTop:'6%',
        textAlign:'center'
    }
    return (
        <div style ={cart_Style} >
            <h2>Cart History<FontAwesomeIcon icon={faCartArrowDown} /></h2>
            <h4>Courses Bought        :{cart.length}</h4>
            <h4>Total Price           :${total.toFixed(2)}</h4>
            <h4>Discount              :${discount.toFixed(2)}</h4>
            <h4>Subtotal              :${subtotal.toFixed(2)}</h4>
            
        </div>
    );
};

export default Cart;