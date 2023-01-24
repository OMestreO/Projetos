import Feed from "../components/Feed";

const MostViewed = () =>{
    const posts = [];

    return(
        <main className="most-viewed">
          <Feed posts={posts}
          title= "Mais vistos"
          subtitle= "Acompanhe os assunto mais comentados no momento e fique por dentro de qualquer novidade"/>

        </main>
    )
}

export default MostViewed;