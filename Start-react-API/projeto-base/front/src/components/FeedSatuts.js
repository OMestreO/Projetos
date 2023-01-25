

export default function FeedStatus(props){
    return (
        <div className="feed-status">
          <img src={props.image} alt="Empty folder" />
  
          <h1>{props.title}</h1>
          <h2>{props.subTitle}</h2>
          
        </div>
      );
    }
