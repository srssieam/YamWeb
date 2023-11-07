import errorImg from '../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <img src={errorImg} className='w-[60%] lg:w-[50%]' alt="" />
        </div>
    );
};

export default ErrorPage;