import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { PropTypes } from "prop-types";
import DropDown from "./ArticleStub.jsx";

function PostList({ number }) {
  let [usersPosts, setUsersPosts] = useState([]);
  useEffect(() => {
    fetch(`api/users/${number}`)
      .then((res) => res.json())
      .then((json) => {
        setUsersPosts(usersPosts.concat(json));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

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
