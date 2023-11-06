import { Link } from 'react-router-dom';
import logo from '../assets/logo-1.png'
import footerbg from '../assets/bannerImg/footerimg.jpg'

const Footer = () => {
    // const footerStyle = {
    //     backgroundImage: 'url("../assets/food img/registerimg.jpg")',
    //     backgroundSize: 'cover', // Adjust this according to your needs
    //     // Add other background-related properties as needed
    //   };
    return (
        <div className=' w-full' style={{backgroundImage:`url(${footerbg})`}}>
            <footer className="footer p-10 max-w-[1250px] mx-auto text-gray-400 bottom-0">
                <aside>
                    <div className='mx-auto'>
                    <Link to='/' className="flex flex-col items-center"><img src={logo} alt="logo" className="w-16 h-16 lg:w-24 lg:h-24" /><h3 className="text-lg lg:text-3xl font-semibold text-[#64a13b]">Yam<span className="text-[#ffa600]">Web</span></h3></Link>
                    </div>
                    <div className="md:flex gap-4">
                        <div>
                            <h3 className="text-2xl font-semibold">CEO srs sieam</h3>
                            <address>FifthAve Street 31 <br />New York, USA
                            </address>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Contact us</h3>
                            <p>contact@yamweb.com <br /> +01 3XX XXX XXX</p>
                        </div>
                    </div>
                </aside>
                <nav className='lg:text-lg'>
                    <header className="footer-title text-[#ffa600]">About</header>
                    <a className="link link-hover" href='/'>Home</a>
                    <Link to='/items' className="link link-hover">Items</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                </nav>
                <nav className='lg:text-lg'>
                    <header className="footer-title text-[#ffa600]">Restaurant</header>
                    <Link to='/about' className="link link-hover">About</Link>
                    <Link to='/services' className="link link-hover">Services</Link>
                    <Link to='/team'className="link link-hover">Our team</Link>
                </nav>
                <form>
                    <header className="footer-title text-xl text-[#ffa600]">Newsletter</header>
                    <fieldset className="form-control lg:w-80">
                        <label className="label">
                            <span className="">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input border border-[#0b270b] w-full" />
                            <button className="btn bg-[#0b270b] text-[#ffa600] border-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;