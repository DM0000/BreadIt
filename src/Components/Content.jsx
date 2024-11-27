import PostList from "./PostList";
import {PropTypes} from "prop-types";
import { useState } from "react";

//TODo: combine heading and h1 div
function Content({ initialPostCount }) {

    
  const [count, setCount] = useState(initialPostCount);

  const handleClick = () => {
    console.log("clicked" + count);
    if (count < 4) {
      setCount(count + 1);
    } else {
      setCount(3);
    }
  };
  return (
    <div className='content'>
      <div className='heading'>
        <h1 className='centered'>BreadIt </h1>
      </div>
      <PostList number={count} />
      <button className='centeredButton' onClick={handleClick}>
        Load More Topics
      </button>
    </div>
  );
}

Content.propTypes = {
  initialPostCount: PropTypes.number,
};

export default Content;
