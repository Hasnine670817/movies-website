import { Link } from 'react-router-dom';
import BanglaMovies from '../Sections/BanglaMovies';
import Banner from '../Sections/Banner';
import BollywoodMovies from '../Sections/BollywoodMovies';
import HollywoodMovies from '../Sections/HollywoodMovies';
import JoinSection from '../Sections/JoinSection';
import TrendingMovies from '../Sections/TrendingMovies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingMovies></TrendingMovies>
            <BollywoodMovies></BollywoodMovies>
            <HollywoodMovies></HollywoodMovies>
            <BanglaMovies></BanglaMovies>

            <div className='text-center pb-10'>
                <Link to="/all-movies" className='md:px-6 md:py-3 px-4 py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg md:rounded-xl font-semibold text-white'>All Movies</Link>
            </div>

            <JoinSection></JoinSection>
        </div>
    );
};

export default Home;