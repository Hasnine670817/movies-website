import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link, useNavigate } from "react-router-dom";
import useMovies from "../useMovies";

const MovieSection = ({title, filterCondition, sliceCondition = [0, 6], link = "/all-trending-movies"}) => {

    const navigate = useNavigate();
    const { movies, loading } = useMovies();

    const handleVideoDetails = (id) => {
        navigate(`/movie/${id}`)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-red-600"></span>
            </div>
        );
    }

    const filterMovies = movies.filter(filterCondition);
    const movieSlice = filterMovies.slice(...sliceCondition);

    return (
        <section className="pb-8 lg:pb-14 pt-5">
            <div className='container-custom'>
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl relative z-20 inline-block">{title}</h3>
                    <Link to={link} className="text-xs font-bold text-red-500 relative z-30 underline">View more</Link>
                </div>
                <div>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            // when window width is >= 320px
                            0: {
                                slidesPerView: 2.2,
                                spaceBetween: 10,
                            },
                            450: {
                                slidesPerView: 2.5,
                                spaceBetween: 10,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3.5,
                                spaceBetween: 20,
                            },
                            // when window width is >= 1024px
                            992: {
                                slidesPerView: 4.5,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 4.7,
                                spaceBetween: 30,
                            },
                            1400: {
                                slidesPerView: 4.7,
                                spaceBetween: 40,
                            },
                        }}
                        spaceBetween={30}
                        navigation={true}
                        loop={false}
                        speed={1000}
                        modules={[Autoplay, Navigation]}
                        className="commonSwiper !pt-10 -mt-8 sm:-mt-10 !px-2 sm:!px-5"
                    >
                        {
                            movieSlice.map((movie, idx) => (
                                <SwiperSlide key={idx} className="py-5" onClick={() => handleVideoDetails(movie.id)}>
                                    <figure className="relative w-full rounded-2xl bg-white/50 hover:scale-105 transition-all duration-300 cursor-pointer">
                                        <img className="[aspect-ratio:1/1.2] rounded-2xl w-full object-cover" src={movie?.poster} alt="image" />
                                        <span className="serial-span font-sans absolute left-0 lg:-left-5 bottom-2 lg:bottom-5 font-bold text-6xl sm:text-7xl lg:text-8xl">
                                            {idx + 1}
                                        </span>
                                    </figure>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default MovieSection;