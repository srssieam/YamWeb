import { Link } from "react-router-dom";
import { SiFacebook } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import about1 from '../assets/about img/about-1.jpg'
import about2 from '../assets/about img/about-2.jpg'
import about3 from '../assets/about img/about-3.jpg'
import about4 from '../assets/about img/about-4.jpg'
import { GiHotMeal } from 'react-icons/gi';
import { MdOutlineBookOnline } from 'react-icons/md';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

const About = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className="max-w-[1250px] px-6 lg:px-0 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-11 my-14">
                <div className="flex-1 grid grid-cols-2 gap-6" data-aos="flip-left" data-aos-duration="1000">
                    <img src={about1} alt="" />
                    <img src={about2} alt="" />
                    <img src={about3} alt="" />
                    <img src={about4} alt="" />
                </div>
                <div className="flex-1" data-aos="flip-right" data-aos-duration="1000">
                    <h1 className="text-xl font-playpen font-semibold text-[#64a13b]">About us</h1>
                    <h1 className="text-3xl font-semibold">Why We Are The Best</h1>
                    <p>At [Restaurant Name], we take pride in offering an unparalleled dining experience that goes beyond just a meal.
                        Our commitment to excellence, attention to detail, and passion for culinary innovation make us stand out in
                        the vibrant world of gastronomy.
                    </p>
                    <div>
                        <div className="md:flex gap-6 items-center">
                            <GiHotMeal className="text-9xl text-[#64a13b]"></GiHotMeal>
                            <div>
                                <h3 className="text-xl font-semibold">Buffet Service</h3>
                                <p>We take pride in offering a delectable buffet experience that's perfect for those who crave variety and love to
                                    savor a wide range of flavors. Our buffet service is not just a meal; it's a feast for the senses.</p>
                            </div>
                        </div>
                        <div className="md:flex gap-6 items-center">
                            <MdOutlineBookOnline className="text-9xl text-[#64a13b]"></MdOutlineBookOnline>
                            <div>
                                <h3 className="text-xl font-semibold">Online Booking</h3>
                                <p>we want to make your dining experience as seamless and enjoyable as possible. That's why we offer an easy
                                    and convenient online booking system. With just a few clicks, you can secure your reservation
                                    and look forward to an unforgettable meal.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-20 justify-between items-center" >
                <iframe className="flex-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12329.298789947634!2d-74.00506900159402!3d40.73394471283048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259975c515555%3A0x4a45fc4021b26d52!2s31%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e1!3m2!1sen!2sbd!4v1697677425813!5m2!1sen!2sbd" className='w-full h-[450px] mt-11' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="flex-1 space-y-4 mb-8">
                    <h1 className="text-3xl font-bold">Got Questions ?</h1>
                    <p className="text-xl">If you’d like to learn more about us <br /> and our foods, get in touch!</p>
                    <div className="md:flex gap-16">
                        <div>
                            <h3 className="text-2xl font-semibold">YamWeb</h3>
                            <address>FifthAve Street 31 <br />New York, USA
                            </address>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Contact us</h3>
                            <p>contact@yamweb.com <br /> +01 3XX XXX XXX</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold">Follow us</h3>
                    <div className='flex gap-8'>
                        <Link to='https://www.facebook.com/'><SiFacebook className='text-4xl text-[#64a13b] transition-transform 1s hover:scale-125'></SiFacebook></Link>
                        <Link to='https://www.youtube.com/'><BsYoutube className='text-4xl text-[#64a13b] transition-transform 1s hover:scale-125'></BsYoutube></Link>
                        <Link to='https://twitter.com/?lang=en'><FaXTwitter className='text-4xl text-[#64a13b] transition-transform 1s hover:scale-125'></FaXTwitter></Link>
                        <Link to='https://www.instagram.com/'><FaInstagram className='text-4xl text-[#64a13b] transition-transform 1s hover:scale-125'></FaInstagram></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;