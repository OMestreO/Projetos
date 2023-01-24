import clockIcon from '../images/clock.svg';
import emptyFolderIcon from '../images/empty-folder.svg';
import userIcon from '../images/user.svg';
import '../styles/Feed.css'
import React from 'react';

const Feed = (props) => {
  if (props.posts.length === 0) {
    return(
      <div className='feed-status'>
        <img src={emptyFolderIcon} alt="Empty folder Icon" />
        
        <h1>Não Encontramos Nada</h1>
        <h2>
          Parece que você e seus amigos não postaram nada. 
          Comece a escrever uma nova história!
        </h2>
      </div>
    );
  }
  return (
    <React.Fragment>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className='feed'>
      {props.posts.map((post) => (
        <article key={post.id}>
          <p>{post.content}</p>
          
          <footer>
            <div className="user-details">
              <img src={userIcon} alt="User" />
              <strong>{post.userName}</strong>
            </div>

            <div className='time'>
              <img src={clockIcon} alt="Clock"></img>
              <span>Publicado em {post.publishdAt.toLocaleDateString('pt-br')}</span>
            </div>
          </footer>
        </article>
      ))}
      </section>
    </React.Fragment>
  );
}

export default Feed;