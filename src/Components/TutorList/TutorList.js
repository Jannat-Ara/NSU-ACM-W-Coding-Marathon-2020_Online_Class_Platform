import React from 'react';
const TutorList = (props) => {
    const {img,name, designation, education}= props.tutors;
    const tutorList_design={
        border: '1px solid gray',
        borderRadius:'5px',
        backgroundColor:'#7E6D6D',
        height:'310px',
        width:'300px',
        padding:'20px',
        margin:'10px',
        float:'left',
        boxShadow:'5px 8px #888888'
        
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
        <div style={tutorList_design}>
            <img style={image}src={img} alt=""></img>
            <h3>{name}</h3>
            <h5>{designation}</h5>
            <h5>{education}</h5>
        </div>
    );
};

export default TutorList;