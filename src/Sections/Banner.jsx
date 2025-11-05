import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from 'swiper/modules';


import bannerImage1 from '../assets/images/banner-image1.jpg'
import bannerImage2 from '../assets/images/banner-image2.jpg'
import bannerImage4 from '../assets/images/banner-image4.jpg'

const Banner = () => {

    const slides = [bannerImage1, bannerImage2, bannerImage4]

    return (
        <section className='relative z-10 overflow-hidden'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                loop={true}
                speed={1000}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                className="banner-slider max-h-[850px]"
            >
                {
                    slides.map((slide, idx) => (
                        <SwiperSlide key={idx} className='relative z-10'>
                            <div className='overflow-hidden h-[550px] lg:h-[600px] xl:h-[700px] 2xl:h-[900px]'>
                                <img className='h-full object-cover object-center w-full zoom-img' src={slide} alt="image" />
                            </div>
                            <div className='absolute bg-black/60 w-full h-full left-0 top-0'></div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='text-white absolute left-1/2 -translate-x-1/2 top-[140px] lg:top-[180px] xl:top-[180px] z-[1] text-center max-w-[654px] w-full mx-auto'>
                <div className='container-custom'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl md:leading-[1.3] xl:text-[45px] xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px] font-black font-josefin uppercase'>Unlimited movies, TV <br /> shows, and more</h2>
                    <h4 className='text-sm md:text-base xl:text-xl mt-3 mb-5 lg:mt-4 lg:mb-7 tracking-[0.2px] font-normal'>Starts at USD 2.99. Cancel anytime.</h4>
                    <p className='text-xs md:text-sm xl:text-base tracking-[0.2px]'>Ready to watch? Enter your email to create or restart your membership.</p>

                    <form className='max-w-[400px] md:max-w-[480px] xl:max-w-[600px] mx-auto pt-4' onClick={(e) => e.preventDefault()}>
                        <fieldset>
                            <div className="join w-full block md:inline-flex">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full h-[40px] xl:h-[55px] px-4 bg-black/50 border border-[#606161] focus-within:border-red-500" />
                                <button className="btn border-0 shadow-none text-white text-lg md:text-lg h-[40px] xl:h-[55px] px-5 bg-red-600 hover:bg-red-700 mt-4 md:mt-0">Get Started</button>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>

            <div className='banner-shape !h-[50px] md:!h-[70px] xl:!h-[100px]'>

            </div>
        </section>
    );
};

export default Banner;