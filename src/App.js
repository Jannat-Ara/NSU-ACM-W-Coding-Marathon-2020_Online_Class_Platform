import React from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import Header from './Header/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';



// variable for courses
const courses=[{name:'Data Science : Complete Alteryx Bootcamp',instructor:'Dr. Shazzad Hosain' , rating:'4.9 ⭐⭐⭐⭐⭐', price:'$12.00'},
{name:'Data Science and Machine Learning with Python and Libraries', instructor:'Dr. Mohammad Rashedur Rahman', rating:'4.8 ⭐⭐⭐⭐⭐',price:'$11.99'},
{name:'Complete Outlier Detection Algorithms A-Z: In Data Science', instructor:'Dr. Nova Ahmed',rating:'4.9 ⭐⭐⭐⭐⭐',price:'11.88'},
{name:'The Complete Tableau Bootcamp for Data Visualization', instructor:'Dr. Tanzilur Rahman',rating:'4.8 ⭐⭐⭐⭐⭐',price:'$10.99'},
{name:'Feature Selection for Machine Learning', instructor:'Dr. Md. Mahfuzur Rahman',rating:'4.8 ⭐⭐⭐⭐⭐',price:'$12.99'},
{name:'2020 Complete Python Bootcamp: From Zero to Hero in Python', instructor:'Dr. Lamia Iftekhar',rating:'4.7 ⭐⭐⭐⭐⭐',price:'$10.99'}

]


function App() {
  return (
    <div>
       <Router>
         <Header></Header>
          <Route path="/home" component={Home}>
            <Home></Home>
          </Route>
          <Route path="/explore_courses" component={Courses}>
          <h2>Courses</h2>
          <ul>{courses.map(courses =><Courses courses={courses}></Courses>)}</ul>
          </Route>
      </Router> 
     {/* <h2>Courses</h2>
     <ul>{courses.map(courses =><Courses courses={courses}></Courses>)}</ul> */}
    </div>
  );
}

export default App;
