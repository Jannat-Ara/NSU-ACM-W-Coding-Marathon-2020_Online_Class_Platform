import React from 'react';
import TutorList from '../TutorList/TutorList';
import './Home.css';
const Home = () => {
    const tutors =[
        {name:'Dr. Mohammad Rashedur Rahman', designation:'Professor & Graduate Co-ordinator', education:'Ph.D. in Computer Science, University of Calgary, Canada'},
        {name:'Dr. Shazzad Hosain', designation:'Professor', education:'PhD in Computer Science from Wayne State University, USA'},
        {name:'Dr. Nova Ahmed', designation:'Associate Professor', education:'Ph.D in Computer Science, Georgia Institute of Technology, USA.'},
        {name:'Dr. Tanzilur Rahman', designation:'Assistant Professor', education:'PhD : University of Tokyo, Japan'},
        {name:'Dr. Md. Mahfuzur Rahman', designation:'Assistant Professor', education:'PhD (Computer Science), University of Manitoba, Canada'},
        {name:'Dr. Lamia Iftekhar', designation:'Associate Professor', education:'Ph.D from Dartmouth College, USA'}
        ];
    const courses=[{name:'Data Science : Complete Alteryx Bootcamp', instructor:'Dr. Shazzad Hosain' , rating:'4.9', price:'$12.00'},
                {name:'Data Science and Machine Learning with Python and Libraries', instructor:'Dr. Mohammad Rashedur Rahman', rating:'4.8',price:'11.99'},
                {name:''}]
    return (
        <div id="tutor">
           <h2>Respective Tutors</h2>
            <ul>
                {tutors.map(tutors =><TutorList tutors={tutors}></TutorList>)}
            </ul>
        </div>
    );
};

export default Home;