import { useEffect } from 'react'
// import sBread from './assets/SlicedBread.jpg'
import bread from './assets/Bread.jpg'
import './App.css'
import { faker } from '@faker-js/faker'





function App() {

  // const [count, setCount] = useState(0)

  // function MyButton() {
  //   return (
  //     <li>{ faker.person.fullName() +
  //       " In " + faker.location.country()}
  //       <img src = {sBread}/>  </li>
  //   );
  // }

  function addItem1() {
    const newItem = document.createElement("li");
    newItem.textContent = faker.person.fullName() +
     " In " + faker.location.country();
    const newImg = document.createElement('img');
    newImg.src = bread;
    newItem.appendChild(newImg);
    return document.getElementById("myList").appendChild(newItem);
  }

  // function addItem() {

  // return (
  //   <li textContent={faker.person.fullName()} >  <img src={bread}/></li>
  // );

  // }


  function addFive(){

  addItem1();
  addItem1();
  }


  useEffect((addFive) => {
    "sdasdfsa"
    addFive();
  }, []);


  return (
    <>
      <div className="navbar">
        <a href="#Home">Home</a>
        <a href="#News">News</a>
        <a href="#Contact">Contact</a>
      </div>

      <div className="container" >

        <div className="sidebar left-sidebar">
          <a href="#">Favorites</a>
          <a href="#">Build a Bread</a>
          <a href="#">Messages</a>
          <a href="#">Help</a>


        </div>
        <div className="content" >
          <div className='heading' >
            {/* <header><img src={sBread} alt="sliced bread" /></header> */}
            <h1 className="centered">BreadIt </h1>
          </div>

          <div className="scroll-container">

            <ul id="myList">
{/*             <MyButton/> */}
{/*             <MyButton/> */}
{/*             <MyButton/> */}
{/*             <MyButton/> */}

            </ul>

            <button onClick={() => addFive()} >Load More Topics</button>

          </div>
        </div>
        <div className="sidebar right-sidebar" >
          <a href="#">Future Add</a>
          <a href="#">Future Add</a>
          <a href="#">Future Add</a>
        </div>
      </div>


    </>


  )
}


export default App
