import { Link } from 'react-router-dom';
import banner1 from '../../assets/bannerImg/banner1.jpg';
import banner2 from '../../assets/bannerImg/banner2.jpg';
import banner3 from '../../assets/bannerImg/banner3.jpg';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='lg:absolute top-0 -z-20 w-full'>
            <Swiper autoplay={{delay: 4000}} pagination={true} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <div className='relative w-full h-[100vh]'>
                        <img src={banner2} className='h-full w-full' alt="" />
                        <div className='absolute top-0 h-full max-w-[1250px] inset-0 mx-auto md:px-10 lg:px-0 flex flex-col md:flex-row items-center'>
                            <div className='flex-1 px-6 lg:px-0'>
                                <div className='text-[#ffa600]  rounded-2xl space-y-5 text-center md:text-left'>
                                    <h1 className='text-3xl mt-8 md:mt-0 lg:text-5xl font-playpen font-extrabold'>Elevate Your Dining Experience</h1>
                                    <p className='text-lg md:text-2xl'>A Culinary Wonderland Awaits - Discover Our Exquisite Menu.</p>
                                    <p className='text-lg md:text-2xl'>20% discount for take away.</p>
                                    <Link to='/items'><button className='mt-4 px-5 py-3 bg-[#0000008c] text-[#64a13b] text-2xl font-bold font-playpen transition rounded-md hover:scale-125 bg-blend-luminosity'>Order Now</button></Link>
                                </div>

                            </div>
                            <div className='flex-1 text-center'>
                                <img src={img3} alt="" className='w-[90%] mx-auto md:mx-0 md:float-right' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[100vh]'>
                        <img src={banner1} className='h-full w-full' alt="" />
                        <div className='absolute top-0 h-full w-full md:px-10 max-w-[1250px] inset-0 mx-auto lg:px-0 flex flex-col md:flex-row items-center'>
                            <div className='flex-1 px-6 lg:px-0'>
                                <div className='text-[#ffa600]  rounded-2xl space-y-5 text-center md:text-left'>
                                    <h1 className='text-4xl mt-8 md:mt-0 lg:text-5xl font-playpen font-extrabold'>Discover the Art of Flavor.</h1>
                                    <p className='text-lg md:text-2xl'>Experience Unforgettable Tastes and Memorable Moments.</p>
                                    <p className='text-lg md:text-2xl'>20% discount for take away.</p>
                                    <Link to='/items'><button className='mt-4 px-5 py-3 bg-[#0000008c] text-[#64a13b] text-2xl font-bold font-playpen transition rounded-md hover:scale-125 bg-blend-luminosity'>Order Now</button></Link>
                                </div>

                            </div>
                            <div className='flex-1 text-center'>
                                <img src={img2} alt="" className='w-[90%] mx-auto md:mx-0 md:float-right' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[100vh]'>
                        <img src={banner3} className='h-full w-full' alt="" />
                        <div className='absolute top-0 h-full w-full md:px-10 max-w-[1250px] inset-0 mx-auto lg:px-0 flex flex-col md:flex-row items-center'>
                            <div className='flex-1 px-6 lg:px-0'>
                                <div className='text-[#ffa600]  rounded-2xl space-y-5 text-center md:text-left'>
                                    <h1 className='text-4xl mt-8 md:mt-0 lg:text-5xl font-playpen font-extrabold'>Satisfy Your Cravings with Us</h1>
                                    <p className='text-lg md:text-2xl'>Savor the Flavors of the World in Every Bite.</p>
                                    <p className='text-lg md:text-2xl'>20% discount for take away.</p>
                                    <Link to='/items'><button className='mt-4 px-5 py-3 bg-[#0000008c] text-[#64a13b] text-2xl font-bold font-playpen transition rounded-md hover:scale-125 bg-blend-luminosity'>Order Now</button></Link>
                                </div>

                            </div>
                            <div className='flex-1 text-center'>
                                <img src={img1} alt="" className='w-[90%] mx-auto md:mx-0 md:float-right' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;