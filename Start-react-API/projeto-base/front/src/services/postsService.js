import errors from "../config/erros";


export async function getPostsLists(){
    const Response = await fetch('http://localhost:3001/posts');
	        if(!Response.ok) {
          	    return false;
        }
        const body = await Response.json();

		return body.map((post) => ({
            ...post,
            publishedAt: new Date(post.publishedAt),
        }));

        
				
}

export async function getPostsListsMostViewed(){
    const Response = await fetch('http://localhost:3001/posts/most-viewed');
	        if(!Response.ok) {
          	    return false;
        }
        const body = await Response.json();

		return body.map((post) => ({
            ...post,
            publishedAt: new Date(post.publishedAt),
        }));

        
				
}

export async function createPost ({history, userName}){
        const response = await fetch('http://localhost:3001/posts', {
          method: 'POST',
          body:JSON.stringify ({
            content: history,
            userName,
          }),
          headers: {
            'Content-Type':'application/json',
          },
        })
    
        if (!response.ok) {
          const body = await response.json();
    
          
        return errors[body.code] || "Erro quando tentou carregar o post";
        
        }
        return true;
}