import "./styles/App.css";

import usericon from './images/user.svg';
import paparPlaneIcon from './images/paper-plane.svg';
import './styles/PostForm.css';
import './styles/Feed.css';
import clockIcon from './images/clock.svg';
import emptyFolder from './images/empty-folder.svg'
import React from "react";
import {useState} from 'react';

const App = () => {
    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            content: "Conteúdo do post",
            userName: "Matheus",
            publishedAt: new Date()
        },
    ]);
    const renderSubmit = (event) =>{
        event.preventDefault();

        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: `Conteúdo do post ${Math.random()}`,
                userName: "Matheus",
                publishedAt: new Date()
        }
    ]);
    }

    return (
        
        <div className="wrapper">
            {['Matheu','Silva', <h1>Qualquer coisa</h1>]}

            <form className="post-form" onSubmit={() => alert('salve')}>
                <input placeholder="Escrava uma historia...."/>

                <div>

                    <img src={usericon} alt="user"/>

                    <input placeholder="Digite teu nome"></input>

                    <button type="submit">
                        <img src={paparPlaneIcon}/>

                        Publicar
                    </button>
                </div>
            </form>

            <main>
                {posts.length === 0 &&(
                    <div className="feed-status">
                    <img src={emptyFolder}/>

                    <h1>não encotramos nada</h1>
                    <h2>parece que você e seus amigos não postaram nada.
                        Comece a escrever uma nova história!
                    </h2>
                </div>
                )}

                {posts.length > 0 && (
                    <React.Fragment>
                        <header>
                            <h1>Seu Feed</h1>
                            <h2>Acompanha o que seus amigos estão pensado em tempo real</h2>
                        </header>

                        <section className="feed">
                        {posts.map((post) =>(
                            <article key={post.id}>
                            <p>{post.content}</p>

                                <footer>
                                    <div className="user-details">

                                        <img src={usericon}/>

                                        <strong>Usuário 1</strong>
                                    
                                    </div>

                                    <div className="time">

                                        <img src={clockIcon} alt="Clock"/>

                                        <span>{post.publishedAt.toLocaleDateString('pt-br')}</span>

                                    </div>
                                </footer>
                        </article>

                    ))}
                </section>
                </React.Fragment>
                )}

                
            </main>
        </div>
    
    );
}

export default App;