import bread from "../assets/Bread.jpg";
import Accordion from "react-bootstrap/Accordion"
import { useState } from "react";
// import { Dropdown } from "bootstrap";




function Person(props) {
  return (
    <div>
      {props.name} in {props.country}
    </div>
  );
}

//TODO: refactor for bootstrap.
export default function DropDown(user) {
  // const fakeName = faker.person.fullName();
  // const fakeCountry = faker.location.country();

  return (
    <Accordion.Item eventKey={user.name}>
      <Accordion.Header>
          <img src={bread} />
        <h2>  <Person name={user.name} country={user.country} />
      </h2>
      </Accordion.Header>
      <Accordion.Body>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
         </Accordion.Body>
    </Accordion.Item>
  );
}

// export default function FakeArticleStub() {
//   return (
//     <div className='accordion-item'>
//       <DropDown name={1} />
//     </div>
//   );
// }
