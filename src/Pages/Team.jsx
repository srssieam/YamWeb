import member1 from '../assets/team/member1.jpg'
import member2 from '../assets/team/member2.jpg'
import member3 from '../assets/team/member3.jpg'


const Team = () => {
    return (
        <div className='mx-auto max-w-[1250px] px-5 lg:px-0 my-11'>
            <h1 className="text-xl font-playpen font-semibold text-center text-[#64a13b]">Our team</h1>
            <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">Meet Our Teem</h1>
            <div className='grid md:grid-cols-3 gap-5 lg:gap-7 my-14'>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border cursor-pointer transform transition-transform 1s hover:scale-110">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={member1} className='h-full w-full object-cover' alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className=" mb-2 text-2xl font-semibold text-blue-gray-900">
                            Mike by Dooley
                        </h4>
                        <p className="font-medium text-lg text-[#64a13b]">
                            Executive
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border cursor-pointer transform transition-transform 1s hover:scale-110">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={member2} className='h-full w-full object-cover' alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className=" mb-2 text-2xl font-semibold text-blue-gray-900">
                        Alextina Jimiey
                        </h4>
                        <p className="font-medium text-lg text-[#64a13b]">
                        Food Lovers
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border cursor-pointer transform transition-transform 1s hover:scale-110">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={member3} className='h-full w-full object-cover' alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className=" mb-2 text-2xl font-semibold text-blue-gray-900">
                            Jhone Doe
                        </h4>
                        <p className="font-medium text-lg text-[#64a13b]">
                            Chief Executive
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;