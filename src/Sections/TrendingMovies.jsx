import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

const TrendingMovies = () => {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Movies.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    const handleVideoDetails = (id) => {
        navigate(`/movie/${id}`)
        // setSelectedMovie(movie);
        // document.getElementById('movies__details').showModal();
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl text-red-600"></span>
            </div>
        );
    }

    const trendingMovies = movies.filter(movie => movie.isTrending === true);
    const movieSlice = trendingMovies.slice(0, 6);

    return (
        <section className="pb-14 pt-5">
            <div className='container-custom'>
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl relative z-20 inline-block">Trending Now</h3>
                    <a href="#" className="text-xs font-bold text-red-500 relative z-30 underline">View more</a>
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
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        loop={false}
                        speed={1000}
                        modules={[Autoplay, Navigation]}
                        className="commonSwiper !pt-10 -mt-8 sm:-mt-10 !px-5"
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

                    {/* {
                        selectedMovie && (
                            <MoviesDetails movie={selectedMovie}></MoviesDetails>
                        )
                    } */}
                </div>
            </div>
        </section>
    );
};

export default TrendingMovies;