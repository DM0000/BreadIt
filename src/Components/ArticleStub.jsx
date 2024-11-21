import bread from "../assets/Bread.jpg";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";

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
export default function DropDown({ name, country, index }) {
 let fill = faker.lorem.paragraph({ min: 4, max: 12 });
  return (
    <Accordion.Item eventKey={`${name}+${index}`}>
      <Accordion.Header>
        <img src={bread} />
        <h2>
          {" "}
          <Person name={name} country={country} />
        </h2>
      </Accordion.Header>
      <Accordion.Body>{fill}</Accordion.Body>
    </Accordion.Item>
  );
}

DropDown.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  index: PropTypes.number
};
