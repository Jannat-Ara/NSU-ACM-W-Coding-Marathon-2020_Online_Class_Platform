import React from 'react';

const MyProfile = (props) => {
    const cart =props.cart;
    let courseAdd,name;
    for(let i=0; i<cart.length;i++){
        courseAdd = cart[i];
        name=courseAdd.name;
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
    const image={
        width:'150px',
        height:'150px',
        textAlign:'center',
        display: 'block',
        marginLeft:'auto',
        marginRight:'auto'
    }
    return (
        <div style ={cart_Style} >
            <img style={image}src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png' alt=""></img>
            <h2>Name: Mr. Louise</h2>
            <h3>Last Course added:</h3>
            <h4>{name}</h4>
        </div>
    );
};

export default MyProfile;