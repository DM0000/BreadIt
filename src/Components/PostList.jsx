import DropDown from "./ArticleStub.jsx";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function PostList({ number }) {
  let [usersPosts, setUsersPosts] = useState([]);
  useEffect(() => {
    fetch(`api/users/${number}`)
      .then((res) => res.json())
      .then((json) => {
        setUsersPosts(usersPosts.concat(json));
      });
  }, []);

  return (
    <Accordion defaultActiveKey='0'>
      {usersPosts.map(({ name, country, index }) => (
        <DropDown key={`${name}+${index}`} name={name} country={country} />
      ))}
      ;
    </Accordion>
  );
}

PostList.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PostList;
