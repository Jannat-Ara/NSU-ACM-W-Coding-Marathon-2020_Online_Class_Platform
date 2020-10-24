import React from 'react';
const TutorList = (props) => {
    const {name, designation, education}= props.tutors;
    const tutorList_design={
        border: '1px solid gray',
        borderRadius:'5px',
        backgroundColor:'#9A1111',
        height:'200px',
        width:'200px',
        padding:'20px',
        margin:'10px',
        float:'left',
        boxShadow:'5px 8px #888888'
        
    }
    return (
        <div style={tutorList_design}>
            <h3>{name}</h3>
            <h5>{designation}</h5>
            <h5>{education}</h5>
        </div>
    );
};

export default TutorList;