import React, {useRef, useState} from "react";
import Counter from "./component/Counter";
import ClassCounter from "./component/ClassCounter";
import './styles/App.css';
import PostItem from "./component/PostItem";
import PostList from "./component/PostList";
import MyButton from "./component/UI/button/MyButton";
import MyInput from "./component/UI/input/MyInput";
function App() {
   const [posts,setPosts] = useState([
       {id:1,title:'JavaScript',body:'Description'},
     {id:2,title:'JavaScript 2',body:'Description'},
     {id:3,title:'JavaScript 3',body:'Description'},
     {id:4,title:'JavaScript 4',body:'Description'}])
    // const [posts2,setPosts2] = useState([
    //     {id:11,title:'Python title  in 2 list in 2nd list',body:'Description'},
    //     {id:21,title:'Python title  in 2 list',body:'Description'},
    //     {id:31,title:'Python title  in 2 list  title 2 list',body:'Description'},
    //     {id:41,title:'Python title  in 2 list  title 2 list 4',body:'Description'}])
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')


    const addNewPost = (event)=>{
       event.preventDefault()
         const newPost={
           id:Date.now(),
           title,
             body
         }
         setPosts([...posts,newPost])
         console.log(newPost)
        setTitle('')
        setBody('')
    };
    return (
    <div className="App">
        <form action="">
            {/*{Controlling components}*/}
            <MyInput
                value={title}
                type="text"
                placeholder="Title of post"
                onChange={event=>setTitle(event.target.value)}
            />
            {/*{Uncontrolled component}*/}

            {/*<MyInput*/}
            {/*    ref={bodyInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder="Description of post"*/}
            {/*/>*/}

            <MyInput
                value={body}
                onChange = {event=>setBody(event.target.value)}
                type="text"
                placeholder="Description of post"
            />
            <MyButton
                onClick={addNewPost}>Create post</MyButton>
        </form>
        <PostList posts={posts} title="List of posts about JavaScript 1"/>


    </div>
  );
}

export default App;
