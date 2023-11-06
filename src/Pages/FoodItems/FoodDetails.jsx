import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const loadedFoodItem = useLoaderData();
    console.log(loadedFoodItem)
    const {_id, foodName, foodImage, foodCategory, quantity, price, addBy, foodOrigin, description}= loadedFoodItem.data;
   

    const handleOrder = ()=>{

    }

    return (
        <div className="max-w-[1250px] mx-auto p-4 lg:p-0">
        <div className="card lg:card-side bg-base-100 shadow-2xl my-16">
            <figure className="flex-1"><img src={foodImage} alt="Album" /></figure>
            <div className="card-body md:text-lg flex-1">
                <h2 className="card-title md:text-2xl">{foodName}</h2>
                <p><strong className="text-[#64a13b]">Made by:</strong> {addBy.name}</p>
                <p><strong className="text-[#64a13b]">Food origin:</strong> {foodOrigin}</p>
                <p><strong className="text-[#64a13b]"> Price:</strong> ${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleOrder} className="btn w-full bg-[#061606] hover:bg-[#28685d] text-white normal-case">Order Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FoodDetails;