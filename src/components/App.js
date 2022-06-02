import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"



function App() {
  const posts = blogData.posts
  
    
  
  
  return (
    <div className="App">
     <Header name = {blogData.name} />
     <About image = {blogData.image} about = {blogData.about}/>
     <ArticleList post = {posts} />
    </div>
  );
}

export default App;
