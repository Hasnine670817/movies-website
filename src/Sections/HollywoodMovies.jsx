
import MovieSection from "../MovieSection/MovieSection";

const HollywoodMovies = () => {

    return (
        <MovieSection
        title="Hollywood Movies" 
        filterCondition={(movie) => movie.category === "Hollywood"} 
        sliceCondition={[6, 14]}
        link="/all-hollywood-movies"
        ></MovieSection>
    );
};

export default HollywoodMovies;