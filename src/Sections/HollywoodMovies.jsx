
import MovieSection from "../MovieSection/MovieSection";

const HollywoodMovies = () => {

    return (
        <MovieSection
        title="Hollywood Movies" 
        filterCondition={(movie) => movie.category === "Hollywood"} 
        sliceCondition={[0, 10]}
        link="/all-hollywood-movies"
        ></MovieSection>
    );
};

export default HollywoodMovies;