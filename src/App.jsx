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

const fakePerson = () => ({
  name: faker.person.fullName(),
  country: faker.location.country(),
});

function App() {
  const [people, setPeople] = useState([]);

  return (
    <>
      <NavBar />

      <div className ='container'>
        <ListGroup className='sidebar left-sidebar' />
        <div className='content'>
          <div className='heading'>
            <h1 className='centered'>BreadIt </h1>
          </div>
          <PostList />
          <button className='centeredButton'>
            Load More Topics
          </button>
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default App;
