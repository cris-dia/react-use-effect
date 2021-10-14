import { useEffect, useState } from "react";
import SinglePost from "./components/SinglePost";
import "./App.css";

function App() {
  // const [currentTime, setCurrentTime] = useState(
  //   new Date().toLocaleTimeString()
  // );

  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState(null);

  console.log(singlePost);
  //useEffect(()=>{})
  //useEffect(()=>{callback fn}, [dependencies])
  //useEffect(()=>{}, [])

  // console.log("Hello 1");

  // useEffect(() => {
  //   console.log("Hello 2");
  // });

  // console.log("Hello 3");

  // useEffect(() => {
  //   let time = setInterval(() => {
  //     return setCurrentTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => {
  //     clearInterval(time);
  //   };
  // }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const handleButtonClick = (id) => {
    setSinglePost(id);
  };

  return (
    <div className="App">
      {/* <h1>{currentTime}</h1> */}

      {posts.map((post) => {
        return (
          <div key={post.id} style={{ margin: "80px" }}>
            <p>
              {" "}
              <strong>Title:</strong> {post.title}
            </p>
            <p>
              <strong>Body:</strong>
              {post.body}
            </p>
            <button onClick={() => handleButtonClick(post.id)}>
              Show More
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
