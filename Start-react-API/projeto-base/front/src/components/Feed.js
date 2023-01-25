import userIcon from '../images/user.svg';
import clockIcon from '../images/clock.svg';
import emptyFolderIcon from '../images/empty-folder.svg';
import loader from '../images/loader-primary.svg'
import cloudErrorIcon from '../images/cloud-error.svg'
import '../styles/Feed.css';
import FeedStatus from './FeedSatuts';

export default function Feed(props) {
  if(props.isLoading){
    return <img src={loader} className='spin' alt='loading'></img>
  }

  if(props.hasError) {
    return(
      <FeedStatus
      image={cloudErrorIcon}
      title='Algo deu errado'
      subTitle='Não foi possivel carregar seu feed. tente
      novamente mais tarde'
      />
    )
  }

  if (props.posts.length === 0) {
    return (
      <div className="feed-status">
        <img src={emptyFolderIcon} alt="Empty folder" />

        <h1>Não encontramos nada</h1>
        <h2>
          Parece que você e seus amigos não postaram nada. Comece a escrever uma nova história!
        </h2>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className="feed">
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className="user-details">
                <img src={userIcon} alt="User" />
                <strong>{post.userName}</strong>
              </div>

              <div className="time">
                <img src={clockIcon} alt="Clock" />
                <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
