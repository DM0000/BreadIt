import { useState, useEffect, useLayoutEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import sBread from "./assets/SlicedBread.jpg";
import bread from "./assets/Bread.jpg";
import "./App.css";
import { faker, Faker } from "@faker-js/faker";
import PostList from "./Components/PostList.jsx";
import NavBar from "./Components/NavBar.jsx";
import ListGroup from "./Components/ListGroup.jsx";
import SideBar from "./Components/SideBar.jsx";

function App() {
  //   const [count, setCount] = useState(0)

  function fakePerson() {
    faker.person.fullName();
  }
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

  // {
  //   /* <> */
  // }
  // {
  //   /* <NavBar/> */
  // }
  // {
  //   /* <div> */
  // }
  // {
  //   /* <ListGroup/> */
  // }
  // {
  //   /* <PostList/> */
  // }
  // {
  //   /* <SideBar/> */
  // }
  // {
  //   /* </div> */
  // }
  // {
  //   /* </> */
  // }

  return (
    <>
      <NavBar />

      <div class="container">
        <ListGroup className="sidebar left-sidebar" />
        <div class="content">
          <div class="heading">
            {/* <header><img src={sBread} alt="sliced bread" /></header> */}
            <h1 class="centered">BreadIt </h1>
          </div>
          <PostList />
          <button className="centeredButton" onClick={() => addFive()}>
            Load More Topics
          </button>
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default App;
