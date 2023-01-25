import Feed from '../components/Feed';
import { useState, useEffect } from "react";
import { getPostsListsMostViewed } from '../services/postsService';

export default function MostViewed() {
  const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] =useState(false);

  useEffect(() =>{
   async function loadPosts() {
    
      try{
        const postsList = await getPostsListsMostViewed();
        // const Response = await fetch('http://localhost:3001/posts');

				
					if(!postsList) {
          	setHasError(true);
          	return;
        }

				setPosts(postsList);
      }catch{
				setHasError(true);
				
			}finally{
				setIsLoading(false);
			}
    }

    loadPosts();

  }, []);
  return (
    <main className="most-viewed">
      <Feed
        isLoading= {isLoading}
        posts={posts}
        hasError={hasError}
        title="Mais vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}
