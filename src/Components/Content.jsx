import PostList from "./PostList"


function Content(){
    return (
        
        <div className='content'>
          <div className='heading'>
            <h1 className='centered'>BreadIt </h1>
          </div>
          <PostList />
          <button className='centeredButton'>
            Load More Topics
          </button>
        </div>
       
    )
};

export default Content