import bread from "../assets/Bread.jpg";
import { faker, Faker } from "@faker-js/faker";

// const [count, setCount] = useState(0);

function Person(props) {
  return (
    <div>
      {props.name} in {props.country}
    </div>
  );
}

function dropDown(props) {
  return (
  <>
    <h2 className='accordion-header'>
      <button
        className='accordion-button collapsed'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target= {props.name}
        aria-expanded='false'
        aria-controls='collapseTwo'
      >
        <img src={bread} />
        <Person name={fakeName} country={fakeCountry} />
      </button>
    </h2>
    <div
      id={props.name}
      className='accordion-collapse collapse'
      data-bs-parent='#accordionExample'
    >
      <div className='accordion-body'>
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </>);
  
}

export default function FakeArticleStub() {
  const fakeName = faker.person.fullName();
  const fakeCountry = faker.location.country();
  
  return (
    <div className='accordion-item'>
      {/* <h2 className='accordion-header'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#fakeName'
          aria-expanded='false'
          aria-controls='collapseTwo'
        >
          <img src={bread} />
          <Person name={fakeName} country={fakeCountry} />
        </button>
      </h2>
      <div
        id='fakeName'
        className='accordion-collapse collapse'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body'>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </div>
      </div> */}

<dropDown name= {1}/>
    </div>
  );
}
//   export default function MyButton() {
//     return (
//       <li>{ "fafafsafasfasf"}
//         </li>
//     );
//   }

//   export default function FakeStub(){
//       const names =  faker.person.fullName() ;
//       const country = county = faker.location.country();
//     return (
//          <li> {names} In {country}
// {/*            <img src = {sBread}/>   */}
//            </li>
//        );
//   }

//  export default   function Stub(fakeProfile) {
//       return (
//         <li>{ "$fakeProfile.name In $fakeProfile.country"}
//           </li>
//       );
//     }
//     function Stub(name, country) {
//       return (
//         <li>{ "$name In $country"}
//           <img src = {sBread}/>  </li>
//       );
//     }
