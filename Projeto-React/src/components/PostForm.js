import '../styles/PostForm.css';
import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';
import { useState } from 'react';

const PostForm = (props) => {
  const [history, setHistory] = useState('');
  const [userName, setUserName] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({ history, userName });

    setHistory('');
    setUserName('');
  }

  return (
    <form className="post-form" onSubmit={formSubmit}>
      <input value={history}
      placeholder="Escreva uma nova história..."
      onChange={(event) => setHistory(event.target.value)} 
      />

      <div>
        <img src={userIcon} />

        <input value={userName}
        placeholder="Digite seu nome..." 
        onChange={(event) => setUserName(event.target.value)}/>

        <button type="submit">
          <img src={paperPlaneIcon} alt="Paper Plane" />
          Publicar
        </button>
      </div>
    </form>
  );
}

export default PostForm;