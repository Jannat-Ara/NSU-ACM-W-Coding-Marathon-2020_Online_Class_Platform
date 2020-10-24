import React from 'react';

const Courses = (props) => {
    const {img, name, instructor, rating,price} = props.courses;
    const courseList_design={
        border: '1px solid gray',
        borderRadius:'5px',
        backgroundColor:'#AA9A9A',
        height:'350px',
        width:'300px',
        padding:'20px',
        margin:'10px',
        float:'left',
        boxShadow:'5px 8px #888888'
        
    }
    const button={
        width:'150px',
        height:'30px',
        border:'1px solid #888888',
        borderRadius:'5px',
        cursor:'pointer',
        backgroundColor:'goldenrod',

    }
    const image={
        width:'250px',
        height:'100px',
        textAlign:'center',
        display: 'block',
        marginLeft:'auto',
        marginRight:'auto'
    }
    return (
           <div style={courseList_design}>
            <img style={image}src={img} alt=""></img>
            <h4>{name}</h4>
            <p>{instructor}</p>
            <p>{rating}</p>
            <p>${price}</p>
            <button style={button} onClick={()=>props.handleAddCourse(props.courses)}>Add to cart</button>
           </div>
    );
};

export default Courses;