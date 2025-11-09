import AllMoviesSection from "./AllMoviesSection";

const AllBollywoodMovies = () => {
    return (
        <AllMoviesSection
        title="All Bollywood Movies"
        filterMoviesCondition={movie => movie.category === "Bollywood"} 
        ></AllMoviesSection>
    );
};

export default AllBollywoodMovies;