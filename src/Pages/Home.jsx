import Banner from '../Sections/Banner';
import JoinSection from '../Sections/JoinSection';
import TrendingMovies from '../Sections/TrendingMovies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingMovies></TrendingMovies>
            <JoinSection></JoinSection>
        </div>
    );
};

export default Home;