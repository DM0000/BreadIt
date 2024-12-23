import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ListGroup from "./components/ListGroup.jsx";
import SideBar from "./components/SideBar.jsx";
import Content from "./Components/Content.jsx";
function App() {
  return (
    <>
      <NavBar />
      {/* TODO: pull container   div or component?? */}
      <div className='container'>
        <ListGroup className='sidebar left-sidebar' />
        <Content initialPostCount={5} />
        <SideBar />
      </div>
    </>
  );
}

export default App;
