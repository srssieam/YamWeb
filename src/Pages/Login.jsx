import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginbg from '../assets/food img/loginimg.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext) 
    const [loginError, setLoginError] =  useState(null);
    const location= useLocation();
    const goTo = useNavigate()

    const handleLogin=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(res => {
                const loggedInUser = res.user;
                console.log(loggedInUser);
                Swal.fire(
                    'Good job!',
                    'Login successful',
                    'success'
                )
                goTo(location?.state ? location.state : '/')
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Login failed',
                    text: 'Wrong email or password!',
                })
                setLoginError('Your password is incorrect')
            })
    }

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(res => {
            const loggedInUser = res.user;
            console.log(loggedInUser);
            Swal.fire(
                'Good job!',
                'Login successful',
                'success'
            )
            goTo(location?.state ? location.state : '/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='lg:absolute top-0 -z-10 h-screen w-full'>
            <div className='relative top-0 w-full'>
                <img src={loginbg} alt="" className='w-full h-[100vh] object-cover' />
                <div className='absolute top-[50%] md:left-[50%] md:translate-x-[-50%] mx-6 md:mx-0 p-8 translate-y-[-50%] md:w-3/5 lg:w-2/5 font-playpen bg-[#0000008c] backdrop-blur-xl md:p-10 rounded-3xl'>
                    <h1 className='text-xl text-center md:text-2xl lg:text-4xl font-semibold py-2 md:py-3 lg:py-7 text-[#64a13b]'>Login now!</h1>
                    <form onSubmit={handleLogin} className='space-y-3 lg:space-y-8'>
                        <div>
                            <label htmlFor="email" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Your Email : </label><br />
                            <div className='flex items-center border-b-2 border-[#ffa600]'>
                                <input type="email" name="email" id="email" className='text-[#64a13b] outline-none bg-transparent w-full px-2 py-1' required />
                                <MdEmail className='text-2xl text-[#ffa600]'></MdEmail>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Your Password : </label><br />
                            <div className='flex items-center border-b-2 border-[#ffa600]'>
                                <input type="password" name="password" id="password" className='text-[#64a13b] outline-none bg-transparent w-full px-2 py-1' required />
                                <FaLock className='text-2xl text-[#ffa600]'></FaLock>
                            </div>
                        </div>
                        <div>
                            <p className='text-red-700 text-lg lg:text-2xl font-semibold'>{loginError}</p>
                        </div>
                        <div>
                            <p className='text-[#ffa600] text-lg'>Do not have any account ? <Link to="/register" className='hover:underline font-semibold text-[#64a13b]'>register</Link> now.</p>
                        </div>
                        <div>
                            <input type="submit" value="Login" className='btn w-full text-xl bg-[#061606] hover:border-[#64a13b]  text-[#ffa600] font-playpen normal-case font-semibold' />
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        <button onClick={handleGoogleLogin} className='mt-4 hover:scale-110 transition-transform flex gap-4 items-center px-4 py-2 text-white bg-transparent border border-[#ffa600] rounded-lg'>Login with google <FcGoogle className='text-xl'></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;