import React, {useState} from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import './styles/App.css';
import PostItem from "./component/PostItem";
function App() {
   const [posts,setPosts] = useState([
       {id:1,title:'JavaScript',body:'Description'},
     {id:2,title:'JavaScript 2',body:'Description'},
     {id:3,title:'JavaScript 3',body:'Description'},
     {id:4,title:'JavaScript 4',body:'Description'}])
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>List of posts</h1>
      {posts.map(post=>
      <PostItem post={post} key = {post.id}/>
      )}

    </div>
  );
}

export default App;
