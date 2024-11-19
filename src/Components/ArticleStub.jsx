import bread from "../assets/Bread.jpg";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function Person({ name, country }) {
  return (
    <div>
      {name} in {country}
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
};

//TODO: refactor for bootstrap.
export default function DropDown({ name, country }) {
  return (
    <Accordion.Item>
      <Accordion.Header>
        <img src={bread} />
        <h2>
          {" "}
          <Person name={name} country={country} />
        </h2>
      </Accordion.Header>
      <Accordion.Body>
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </Accordion.Body>
    </Accordion.Item>
  );
}

DropDown.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
};
