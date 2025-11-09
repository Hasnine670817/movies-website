import MovieSection from "../MovieSection/MovieSection";

const BollywoodMovies = () => {
    return (
        <MovieSection
        title="Bollywood Movies" 
        filterCondition={movie => movie.category === "Bollywood"} 
        sliceCondition={[0, 6]} 
        link="/all-bollywood-movies"
        ></MovieSection>
    );
};

export default BollywoodMovies;