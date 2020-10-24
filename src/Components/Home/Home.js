import React from 'react';
import TutorList from '../TutorList/TutorList';
import './Home.css';
const Home = () => {
    // variable for tutorList
    const tutors =[
        {name:'Dr. Mohammad Rashedur Rahman', designation:'Professor & Graduate Co-ordinator', education:'Ph.D. in Computer Science, University of Calgary, Canada'},
        {name:'Dr. Shazzad Hosain', designation:'Professor', education:'PhD in Computer Science from Wayne State University, USA'},
        {name:'Dr. Nova Ahmed', designation:'Associate Professor', education:'Ph.D in Computer Science, Georgia Institute of Technology, USA.'},
        {name:'Dr. Tanzilur Rahman', designation:'Assistant Professor', education:'PhD : University of Tokyo, Japan'},
        {name:'Dr. Md. Mahfuzur Rahman', designation:'Assistant Professor', education:'PhD (Computer Science), University of Manitoba, Canada'},
        {name:'Dr. Lamia Iftekhar', designation:'Associate Professor', education:'Ph.D from Dartmouth College, USA'}
        ];
        
    return (
        <div className="classes-container">
           <div className="tutor-container">
            <h2>Respective Tutors</h2>
                <ul>{tutors.map(tutors =><TutorList tutors={tutors}></TutorList>)}</ul>
            </div>
        </div>
        
    );
};

export default Home;