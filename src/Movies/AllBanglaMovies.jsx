import AllMoviesSection from "./AllMoviesSection";

const AllBanglaMovies = () => {
    return (
        <AllMoviesSection 
        title="All Bangla Movies" 
        filterMoviesCondition={movie => movie.category === "Bangla"}
        ></AllMoviesSection>
    );
};

export default AllBanglaMovies;