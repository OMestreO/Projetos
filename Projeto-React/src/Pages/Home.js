import React, { useState } from "react";
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const formSubmit = ({ history, userName }) => {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishdAt: new Date()
      }
    ]);
  }

  return (
    <React.Fragment>
      <PostForm onSubmit={formSubmit}/>

        <main>
          <Feed 
          posts={posts} 
          title="Seu feed"
          subtitle="Acompnha o que ses amigos estão pensado em tempo real"/>

        </main>
    </React.Fragment>
  );
};
export default Home;