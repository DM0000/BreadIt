import bread from "../assets/Bread.jpg";
import { faker, Faker } from "@faker-js/faker";
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
function DropDown(props) {
  const fakeName = faker.person.fullName();
  const fakeCountry = faker.location.country();

  return (
    <>
      <h2 className='accordion-header'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={props.name}
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
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </div>
      </div>
    </>
  );
}

export default function FakeArticleStub() {
  return (
    <div className='accordion-item'>
      <DropDown name={1} />
    </div>
  );
}
