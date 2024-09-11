import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sBread from './assets/SlicedBread.jpg'
import bread from './assets/Bread.jpg'
import './App.css'
import { faker, Faker } from '@faker-js/faker'





function App() {

  const [count, setCount] = useState(0)

  function addItem1() {
    const newItem = document.createElement("li");
    newItem.textContent = faker.person.fullName() +
     " In " + faker.location.country();
    const newImg = document.createElement('img');
    newImg.src = bread;
    newItem.appendChild(newImg);
    document.getElementById("myList").appendChild(newItem);

    // document.getElementById("container").appendChild(newItem);
    // document.getElementsByClassName("container").appendChild(newImg);
  }
  
  function addFive(){
  addItem1();
  addItem1();
  addItem1();
  addItem1();
  addItem1();
  }
  




  return (
    <>
      <div class="navbar">
        <a href="#Home">Home</a>
        <a href="#News">News</a>
        <a href="#Contact">Contact</a>
      </div>

      <div class="container" onLoad={() =>addFive()}>
        <div class="sidebar left-sidebar">
          <a href="#">Favorites</a>
          <a href="#">Help</a>
          <a href="#">Messages</a>
        </div>
        <div class="content">
          <div class='heading' >
            {/* <header><img src={sBread} alt="sliced bread" /></header> */}
            <h1 class="centered">BreadIt </h1>
          </div>

          <div class="scroll-container">
            <ul id="myList">

            </ul>
            <button onClick={() => addFive()}>Load Topics</button>

          </div>
        </div>
        <div class="sidebar right-sidebar">
          <a href="#">Add</a>
          <a href="#">Add</a>
          <a href="#">Add</a>
        </div>
      </div>

    </>

  )
}

export default App
