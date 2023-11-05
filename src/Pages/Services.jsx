import { GiFruitBowl, GiHotMeal } from 'react-icons/gi';
import { IoRestaurantOutline } from 'react-icons/io5';
const Services = () => {
    return (
        <div className=" md:my-11 px-6 lg:px-0 m-4 max-w-[1250px] mx-auto text-[#4c7c2d]">
            <h1 className="text-xl font-playpen font-semibold text-center text-[#64a13b]">services we provide</h1>
            <div className='flex flex-wrap gap-9 my-6'>
                <div className='flex-1 border border-[#64a13b] p-11 text-center space-y-5 hover:bg-[#ffa600] cursor-pointer'>
                    <GiFruitBowl className='min-w-[170px] text-8xl mx-auto'></GiFruitBowl>
                    <h3 className='text-2xl font-semibold font-playpen'>Fresh Healthy Food</h3>
                    <p>Emphasize the use of fresh and locally sourced ingredients in your dishes. Mention your commitment to quality and how it enhances the dining experience.</p>
                </div>
                <div className='flex-1 border border-[#64a13b] p-11 text-center space-y-5 hover:bg-[#ffa600] cursor-pointer'>
                    <GiHotMeal className='min-w-[170px] text-8xl mx-auto'></GiHotMeal>
                    <h3 className='text-2xl font-semibold font-playpen'>Farm-to-Table Dining</h3>
                    <p>If your restaurant follows a farm-to-table concept, highlight this as a unique service. Explain how it supports local farmers and provides customers with the freshest produce.</p>
                </div>
                <div className='flex-1 border border-[#64a13b] p-11 text-center space-y-5 hover:bg-[#ffa600] cursor-pointer'>
                    <IoRestaurantOutline className='min-w-[170px] text-8xl mx-auto'></IoRestaurantOutline>
                    <h3 className='text-2xl font-semibold font-playpen'>Chef's Specials</h3>
                    <p>Promote your chef's special creations or signature dishes. These can be unique and exclusive to your restaurant, creating a sense of excitement for customers.</p>
                </div>
            </div>


        </div>
    );
};

export default Services;