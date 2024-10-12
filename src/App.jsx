import { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sBread from './assets/SlicedBread.jpg'
import bread from './assets/Bread.jpg'
import './App.css'
import { faker, Faker } from '@faker-js/faker'
import PostList from './Components/PostList.jsx'
import NavBar from './Components/NavBar.jsx'
import ListGroup from './Components/ListGroup.jsx'


function App() {

//   const [count, setCount] = useState(0)

//   const fullName  = () => (
//       faker.person.fullName()
//       );
//
//
//  const name = ()=> faker.person.fullName() ;
//       const country =()=> faker.location.country();


//   function MyButton() {
//     return (
//       <li>{ faker.person.fullName() +
//         " In " + faker.location.country()}
//         <img src = {sBread}/>  </li>
//     );
//   }

//   function addItem1() {
//     const newItem = document.createElement("li");
//     newItem.textContent = faker.person.fullName() +
//      " In " + faker.location.country();
//     const newImg = document.createElement('img');
//     newImg.src = bread;
//     newItem.appendChild(newImg);
//     return document.getElementById("myList").appendChild(newItem);
//   }
//
//   function addItem() {
//
//   return (
//     <li textContent={faker.person.fullName()} >  <img src={bread}/></li>
//   );
//
//   }
//
//
//   function addFive(){
//
//   addItem1();
//   addItem1();
//   }
//
//
//   useEffect(() => {
//     addFive();
//   }, []);


  return (

  <>
      <NavBar/>
      <div class="container" >
        <div class="sidebar left-sidebar">
           <ListGroup/>


        </div>
        <div class="content" >
{/*           <div class='heading' > */}
{/*              */}{/* <header><img src={sBread} alt="sliced bread" /></header> */}
{/*             <h1 class="centered">BreadIt </h1> */}
{/*           </div> */}

{/*           <div class="scroll-container"> */}
<PostList/>
{/*           </div> */}
        </div>
        <div class="sidebar right-sidebar" >
          <ListGroup/>

        </div>
      </div>


    </>
  )
}


export default App
