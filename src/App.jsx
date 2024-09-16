import { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sBread from './assets/SlicedBread.jpg'
import bread from './assets/Bread.jpg'
import './App.css'
import { faker, Faker } from '@faker-js/faker'





function App() {

  const [count, setCount] = useState(0)

  function MyButton() {
    return (
      <li>{ faker.person.fullName() +
        " In " + faker.location.country()}
        <img src = {sBread}/>  </li>
    );
  }

  function addItem1() {
    const newItem = document.createElement("li");
    newItem.textContent = faker.person.fullName() +
     " In " + faker.location.country();
    const newImg = document.createElement('img');
    newImg.src = bread;
    newItem.appendChild(newImg);
    return document.getElementById("myList").appendChild(newItem);
  }

  function addItem() {

  return (
    <li textContent={faker.person.fullName()} >  <img src={bread}/></li>
  );

  }


  function addFive(){

  addItem1();
  addItem1();
  }


  useEffect(() => {
    addFive();
  }, []);


  return (
    <>
      <div class="navbar">
        <a href="#Home">Home</a>
        <a href="#News">News</a>
        <a href="#Contact">Contact</a>
      </div>

      <div class="container" >

        <div class="sidebar left-sidebar">
          <a href="#">Favorites</a>
          <a href="#">Build a Bread</a>
          <a href="#">Messages</a>
          <a href="#">Help</a>


        </div>
        <div class="content" >
          <div class='heading' >
            {/* <header><img src={sBread} alt="sliced bread" /></header> */}
            <h1 class="centered">BreadIt </h1>
          </div>

          <div class="scroll-container">

            <ul id="myList">
{/*             <MyButton/> */}
{/*             <MyButton/> */}
{/*             <MyButton/> */}
{/*             <MyButton/> */}

            </ul>

            <button onClick={() => addFive()} >Load More Topics</button>

          </div>
        </div>
        <div class="sidebar right-sidebar" >
          <a href="#">Future Add</a>
          <a href="#">Future Add</a>
          <a href="#">Future Add</a>
        </div>
      </div>


    </>


  )
}


export default App
