import DropDown from "./ArticleStub.jsx";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

//TODo: update to take stubProp
function PostList({ number }) {
  let [usersPosts, setUsersPosts] = useState([]);
  useEffect(() => {
    fetch(`api/users/${number}`)
      .then((res) => res.json())
      .then((json) => {
        setUsersPosts(usersPosts.concat(json));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Accordion defaultActiveKey='0'>
      {usersPosts.map(({ name, country, index }) => (
        // eslint-disable-next-line react/jsx-key
        <DropDown
          key={`${name}+${index}`}
          eventKey={`${name}+${index}`}
          id={index}
          name={name}
          country={country}
        />
      ))}
      ;
    </Accordion>
  );
}

PostList.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PostList;
