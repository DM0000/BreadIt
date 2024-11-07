import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import ListGroup from "./Components/ListGroup.jsx";
import SideBar from "./Components/SideBar.jsx";
import Content from "./Components/Content.jsx";



function addToState(something){
  setPeople(people.push(something))
}


function App() {
  const [people, setPeople] = useState([]);

  

  return (
    <>
      <NavBar />
      {/* TODO: pull container   div or component?? */}
      <div className ='container'>
        <ListGroup className='sidebar left-sidebar' />
        <Content/>
        <SideBar/>
      </div>
    </>
  );
}

export default App;
