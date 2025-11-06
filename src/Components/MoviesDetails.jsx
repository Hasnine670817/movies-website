import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MoviesDetails = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Movies.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find((item) => item.id === parseInt(id));
                setMovie(found);
            })
    }, [id])

    if (!movie) {
        return (
            <div className="flex justify-center items-center h-[60vh] transition-opacity duration-700">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <>
            <section className="relative min-h-screen bg-black text-white overflow-hidden">
                {/* 🔹 Background image with gradient overlay */}
                <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${movie.poster})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                {/* 🔹 Content */}
                <div className='container-custom'>
                    <div className="relative z-10 py-[80px] md:py-[100px] flex flex-wrap items-center">
                        {/* Left: Movie Poster */}
                        <div className="w-full md:w-1/2 lg:w-1/3 h-full">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full rounded-2xl shadow-2xl border border-gray-700 h-[350px] md:h-[450px] object-cover"
                                />
                        </div>
                        {/* Right: Movie Info */}
                        <div className="w-full md:w-1/2 lg:w-2/3 md:ps-8">
                            <h2 className="text-2xl mt-5 md:mt-0 md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">{movie.title}</h2>
                            <p className="text-gray-300 mb-3 md:mb-6 text-sm md:text-lg leading-relaxed">
                                {movie.description}
                            </p>
                            {/* Genres */}
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                {movie.genres.map((genre, i) => (
                                <span
                                    key={i}
                                    className="bg-red-500/20 text-red-400 border border-red-400/50 px-3 py-1 text-xs md:text-sm rounded-full"
                                    >
                                {genre}
                                </span>
                                ))}
                            </div>
                            {/* Extra Info */}
                            <div className="text-gray-400 text-sm md:text-base space-y-1 mb-6">
                                <p>
                                    <span className="font-medium text-white">Language:</span>{' '}
                                    {movie.language}
                                </p>
                                <p>
                                    <span className="font-medium text-white">Category:</span>{' '}
                                    {movie.category}
                                </p>
                                <p>
                                    <span className="font-medium text-white">Release Year:</span>{' '}
                                    {movie.releaseYear}
                                </p>
                                <p>
                                    <span className="font-medium text-white">Rating:</span>{' '}
                                    ⭐ {movie.rating}/5
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="flex items-center gap-4">
                                <a
                                    href={movie.trailer}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="md:px-6 md:py-3 px-4 py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg md:rounded-xl font-semibold"
                                    >
                                ▶ Watch Trailer
                                </a>
                                <button
                                    onClick={() => navigate(-1)}
                                className="md:px-6 md:py-3 px-4 py-2 text-sm md:text-base bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-lg md:rounded-xl font-semibold"
                                >
                                ← Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MoviesDetails;