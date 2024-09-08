import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sBread from './assets/SlicedBread.jpg'
import bread from './assets/Bread.jpg'
import './App.css'
import { faker, Faker } from '@faker-js/faker'





function App() {

  // let count = 0;

  //  while(count<2){
  //     addItem1();
  //     addItem2();
  //     i++;
  //   };
  window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
      /** Your code here. **/
      addItem1();
      addItem2();
      localStorage.setItem("hasCodeRunBefore", true);
    }
  }



  function addItem1() {

    const newItem = document.createElement("li");
    newItem.textContent = faker.person.fullName() +
     " In " + faker.location.country();
    const newImg = document.createElement('img');
    newImg.src = bread;

    // fakeImg =faker.image.urlLoremFlickr({  width: 100,
    //   height: 200, category: 'bread' });


    // fakebread = faker.image.urlLoremFlickr({ category: 'food' });

    newItem.appendChild(newImg);
    // newImg.src(bread);
    // newPic =faker.image.urlPicsumPhotos;
    document.getElementById("myList").appendChild(newItem);


    // document.getElementById("container").appendChild(newItem);
    // document.getElementsByClassName("container").appendChild(newImg);


  }
  function addItem2() {
    const newItem = document.createElement("li");
    newItem.textContent =newItem.textContent = faker.person.fullName() +
    " In " + faker.location.country();
    const newImg = document.createElement('img');
    newImg.src = bread;

    // fakeImg =faker.image.urlLoremFlickr({  width: 100,
    //   height: 200, category: 'bread' });


    // fakebread = faker.image.urlLoremFlickr({ category: 'food' });

    newItem.appendChild(newImg);
    // newImg.src(bread);
    // newPic =faker.image.urlPicsumPhotos;
    document.getElementById("myList2").appendChild(newItem);
  }
  <button onClick={() => setCount((count) => count + 1)}></button>


  return (
    <>
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="container" onload="loaded()" >
        <div class="sidebar left-sidebar">
          <a href="#">Favorites</a>
          <a href="#">Help</a>
          <a href="#">Messages</a>
        </div>
        <div class="content">
          <div class='heading' >
            <header><img src={sBread} alt="sliced bread" /></header>
            <h1 class="centered">BreadIt </h1>
          </div>

          <div class="scroll-container">
            <ul id="myList">

            </ul>
            <button onClick={() => addItem1()}>Add Item</button>

            <p>Content for the first scrolling container...</p>

          </div>
          <div class="scroll-container">

            <ul id="myList2">

            </ul>

            <button onClick={() => addItem2()}>Add Item</button>
            <p>Content for the second scrolling container...</p>

          </div>
        </div>
      </div>

    </>

  )
}

export default App
