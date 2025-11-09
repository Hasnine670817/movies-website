import MovieSection from '../MovieSection/MovieSection';

const BanglaMovies = () => {
    return (
        <MovieSection 
        title="Bangla Movies" 
        filterCondition={movie => movie.category === "Bangla"} 
        link="/all-bangla-movies"
        ></MovieSection>
    );
};

export default BanglaMovies;