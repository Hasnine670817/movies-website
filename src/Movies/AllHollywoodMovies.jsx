import AllMoviesSection from './AllMoviesSection';

const AllHollywoodMovies = () => {
    return (
        <AllMoviesSection 
        title="All Hollywood Movies"
        filterMoviesCondition={movie => movie.category === "Hollywood"}
        ></AllMoviesSection>
    );
};

export default AllHollywoodMovies;