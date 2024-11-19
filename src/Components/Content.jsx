import PostList from "./PostList";
import PropTypes from "prop-types";

function Content({ initialPostCount }) {
  return (
    <div className='content'>
      <div className='heading'>
        <h1 className='centered'>BreadIt </h1>
      </div>
      <PostList number={initialPostCount} />
      <button className='centeredButton'>Load More Topics</button>
    </div>
  );
}

Content.propTypes = {
  initialPostCount: PropTypes.number,
};

export default Content;
