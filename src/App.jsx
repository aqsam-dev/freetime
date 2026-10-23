import { useState } from "react";
import PostList from "./PostList";
import './app.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "My first post", author: "Ali" },
     { id: 2, title: "My Second post", author: "Ali" },
      { id: 3, title: "My Third post", author: "Ali" },
       { id: 4, title: "My Fourth post", author: "Ali" },
        { id: 5, title: "My Fifth post", author: "Ali" },
         { id: 6, title: "My Sixth post", author: "Ali" },
  ]);

  return (
    <div className="app">
      <h1 className="app-title">My Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default App;