import MovieSection from "../MovieSection/MovieSection";

const TrendingMovies = () => {

    return (
        <MovieSection 
        title="Trending Now" 
        filterCondition={(movie) => movie.isTrending === true} 
        sliceCondition={[0, 6]}
        link="/all-trending-movies"
        ></MovieSection>
    );
};

export default TrendingMovies;