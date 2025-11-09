import Banner from '../Sections/Banner';
import HollywoodMovies from '../Sections/HollywoodMovies';
import JoinSection from '../Sections/JoinSection';
import TrendingMovies from '../Sections/TrendingMovies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingMovies></TrendingMovies>
            <HollywoodMovies></HollywoodMovies>
            <JoinSection></JoinSection>
        </div>
    );
};

export default Home;