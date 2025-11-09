import { useNavigate } from "react-router-dom";
import useMovies from "../useMovies";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const AllMoviesSection = ({filterMoviesCondition, title}) => {

    const navigate = useNavigate();
    const { movies, loading } = useMovies();
    const [searchText, setSearchText] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sorting, setSorting] = useState(false);

    // filter all movies
    const allMovies = filterMoviesCondition ? movies.filter(filterMoviesCondition) : movies;

    // for search handler
    const handleSearchInput = (e) => {
        setSearchText(e.target.value);
    }

    // for search filter
    let filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // for handle sort
    const handleSortChange = (e) => {
        // setSortBy(e.target.value);
        const value = e.target.value;
        setSorting(true);
        setSortBy(value);

        setTimeout(() => {
            setSorting(false);
        }, 1000);
    }

    // for sort functionality
    if (sortBy === "Rating") {
        filteredMovies = [...filteredMovies].sort((a, b) => b.rating - a.rating);
    }
    else if (sortBy === "Release Year") {
        filteredMovies = [...filteredMovies].sort((a, b) => b.releaseYear - a.releaseYear);
    }

    //  for handle video details
    const handleVideoDetails = (id) => {
        navigate(`/movie/${id}`);
    }

    // for loading
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-red-600"></span>
            </div>
        );
    }

    return (
        <div className='py-[100px] md:py-[130px]'>
            <div className='container-custom'>
                <div>
                    <h2 className='text-center text-2xl md:text-4xl mb-4 sm:mb-5 md:mb-8'>{title}</h2>
                    <div className="pb-6 flex flex-wrap sm:flex-row-reverse sm:flex-nowrap items-center justify-between">                        
                        <label className="input sm:w-[250px] md:w-[300px] lg:w-[400px] bg-black/50 border border-[#606161] focus-within:border-red-500 focus-within:outline-0 text-white">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" onChange={handleSearchInput} required placeholder="Search" />
                        </label>
                        <div className="flex gap-2 items-center w-[190px] mt-4 sm:mt-0 mx-auto sm:mx-0">
                            <p className="w-[90px] text-white text-base">Sort by:</p>
                            <select onChange={handleSortChange} defaultValue="Pick a value" className="select bg-transparent border border-[#606161] focus-within:outline-0 focus-within:border-red-500 text-white w-[150px]">
                                <option disabled={true}>Pick a value</option>
                                <option>Rating</option>
                                <option>Release Year</option>
                            </select>
                        </div>
                    </div>
                </div>

                {
                    sorting ? 
                    (
                        <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                            <span className="loading loading-bars loading-xl text-red-600"></span>
                        </div>
                    ) : 
                    (
                        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-5">
                            {
                                filteredMovies.length > 0 ? (
                                    filteredMovies.map(movie => (
                                        <div key={movie.id} className="relative cursor-pointer" onClick={() => handleVideoDetails(movie.id)}>
                                            <figure className="w-full overflow-hidden">
                                                <img className="w-full [aspect-ratio:1/1.3] object-cover hover:scale-105 transition-transform duration-300" src={movie?.poster} alt={movie?.title} />
                                            </figure>
                                            <div className="flex items-center justify-between absolute w-full top-2.5 left-0 px-2.5">
                                                <p className="flex gap-1 items-center badge bg-black/70 border-0 text-white">{movie?.rating} <FaStar className="text-yellow-500" /></p>
                                                <p className="badge bg-black/70 border-0 text-white">{movie?.releaseYear}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center mt-10">
                                        <h4 className="animate-bounce text-3xl text-red-600">Oops!</h4>
                                        <p className="text-center text-gray-400 mt-3">No movies found 😢</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

                <div className="text-center pt-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="md:px-6 md:py-3 px-4 py-2 text-sm md:text-base bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-lg md:rounded-xl font-semibold text-white"
                        >
                        ← Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllMoviesSection;