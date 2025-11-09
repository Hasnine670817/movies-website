
import AllMoviesSection from "./AllMoviesSection";

const AllTrendingMovies = () => {

    return (
        <AllMoviesSection 
        title="All Trending Movies"
        filterMoviesCondition={movie => movie.isTrending === true}
        ></AllMoviesSection>
    );
};

export default AllTrendingMovies;