import FakeArticleStub from "./ArticleStub.jsx";

//TODo: update to take stubProp
function PostList() {
  return (
    <div className='accordion scroll-container' id='accordionExample'>
      {/* TODO:Refactor to use map */}
      <FakeArticleStub />
      <FakeArticleStub />
      <FakeArticleStub />
    </div>
  );
}

export default PostList;
