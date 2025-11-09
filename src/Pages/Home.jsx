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
            <JoinSection></JoinSection>
        </div>
    );
};

export default Home;