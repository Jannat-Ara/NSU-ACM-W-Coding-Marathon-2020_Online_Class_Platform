import React, { useState } from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import TutorList from './Components/TutorList/TutorList';
import Home from './Components/Home/Home';
import Header from './Header/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';

// variable for tutorList 
const tutors =[
  {id:'1',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png',name:'Dr. Mohammad Rashedur Rahman', designation:'Professor & Graduate Co-ordinator', education:'Ph.D. in Computer Science, University of Calgary, Canada'},
  { id:'2',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png',name:'Dr. Shazzad Hosain', designation:'Professor', education:'PhD in Computer Science from Wayne State University, USA'},
  {id:'3',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png',name:'Dr. Nova Ahmed', designation:'Associate Professor', education:'Ph.D in Computer Science, Georgia Institute of Technology, USA.'},
  {id:'4',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png',name:'Dr. Tanzilur Rahman', designation:'Assistant Professor', education:'PhD : University of Tokyo, Japan'},
  {id:'5',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png',name:'Dr. Md. Mahfuzur Rahman', designation:'Assistant Professor', education:'PhD (Computer Science), University of Manitoba, Canada'},
  {id:'6',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png',name:'Dr. Lamia Iftekhar', designation:'Associate Professor', education:'Ph.D from Dartmouth College, USA'}
  ];

// variable for courses
const courses=[{ id:'1',img:'https://img-a.udemycdn.com/course/480x270/658286_99b2_2.jpg?wSlQI9BW1P7Y94Yism_RVatStKx_CWqcZwjF_jk1Mt4DMsbMErvIJriJmStanNBLKRl7inpEYXNiZrR7LnHfiL_6Rtplh7bZyscxPFh4YmP1qlvArrKKas4oMTswFtU' ,name:'Data Science : Complete Alteryx Bootcamp',instructor:'Dr. Shazzad Hosain' , rating:'4.9 ⭐⭐⭐⭐⭐', price:12.50},
{id:'2',img:'https://img-a.udemycdn.com/course/480x270/567828_67d0.jpg?Z_UEY-wDC8Up_eImRqOEGyJcANttE9xWLD3xhEwXmx0snEWX2xuTH91r8vWLC2lDORgXYmziccNLToO0FsjkF0nrCjCqjSolNOZqH3Ec28EBw2NC0S9GKj9eXN5X',name:'Data Science and Machine Learning with Python and Libraries', instructor:'Dr. Mohammad Rashedur Rahman', rating:'4.8 ⭐⭐⭐⭐⭐',price:11.99},
{id:'3',img:'https://img-b.udemycdn.com/course/480x270/1985884_f18e_2.jpg?secure=8d9OIzw8zmgA4IpSPNgMlg%3D%3D%2C1603599955',name:'Complete Outlier Detection Algorithms A-Z: In Data Science', instructor:'Dr. Nova Ahmed',rating:'4.9 ⭐⭐⭐⭐⭐',price:11.88},
{id:'4',img:'https://img-a.udemycdn.com/course/480x270/2382715_d522_2.jpg?4iQWBN3ZiLKkcwYrWBHSOeHBLi4kD5zOlGf1x-QGYuiwxVccQGJ-3_PwIlgqoi5zqbKHXkxK1yW9B3OKgqmiuSt0zbK5MOMu5Xzk7-kwDC-3nNrZc0NoJ3J5Rs9VVHQB',name:'The Complete Tableau Bootcamp for Data Visualization', instructor:'Dr. Tanzilur Rahman',rating:'4.8 ⭐⭐⭐⭐⭐',price:10.99},
{id:'5',img:'https://img-a.udemycdn.com/course/480x270/3439256_cc9b_2.jpg?JQzjfts2dZ0xmFUTbz6_iUjgvVc8RimLrNGfOqBGl-J6lYKffNX-_03RHlNiCMrSv2j6CGhrUnhJuEWp8wYea8mgnd8ca7zqrOU6jyY9x5GxWxLFAs7aVkIajyKq4r4y',name:'Feature Selection for Machine Learning', instructor:'Dr. Md. Mahfuzur Rahman',rating:'4.8 ⭐⭐⭐⭐⭐',price:12.99},
{id:'6',img:'https://img-a.udemycdn.com/course/480x270/992566_aeb4_2.jpg?l6-CWTcP6Hk-VeWkB0er2ifnRA9cnaHn-PBy3D7EB4JTokzBlrF-RjTQCPmXFk-35rq9NwADArhq__kwOWOL_6tailKLo1j8nqc5C68c4c2QE0YZ1ZvFj0y0UOIcRh4',name:'2020 Complete Python Bootcamp: From Zero to Hero in Python', instructor:'Dr. Lamia Iftekhar',rating:'4.7 ⭐⭐⭐⭐⭐',price:10.99}

]

function App() {
  // cart part
  const [cart,setCart]=useState([]);
  const handleAddCourse =(courses) =>{
    console.log("added",courses)
  const newCart= [...cart,courses];
  setCart(newCart);
}

  return (
    <div>
       <Router>
         <Header></Header>
          {/* <Route path="/home" component={Home}>
            <Home></Home>
          </Route> */}
          <Route path="/tutors" component={TutorList}>
          <h2 className="Title">Respective Tutors</h2>
                <ul>{tutors.map(tutors =><TutorList tutors={tutors} key={tutors.id}></TutorList>)}</ul>
          </Route>
          <Route path="/explore_courses" component={Courses}>
          <h2 className="Title">Courses</h2>
          <ul>{courses.map(courseList =>
              <Courses  handleAddCourse ={handleAddCourse} 
              courses={courseList} key={courses.id}
              ></Courses>)}</ul>
          </Route>
           <Route path="/cart"  component={Cart}>
          <h2></h2>
          <Cart cart={cart}></Cart>
          </Route> 
      </Router> 
     {/* <h2>Courses</h2>
     <ul>{courses.map(courses =><Courses courses={courses}></Courses>)}</ul> */}
    </div>
  );
}

export default App;
