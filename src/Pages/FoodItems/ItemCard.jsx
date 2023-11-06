import { Link } from "react-router-dom";
import halal from '../../assets/halal.png'

const ItemCard = ({ item }) => {
    const { _id, foodName, foodImage, foodCategory, price, quantity } = item;
    return (
        <div className="card card-compact bg-base-100 border shadow-[#64a13b] shadow-xl">
            <figure className="h-[250px] relative">
                <img src={foodImage} alt="img" className="h-full w-full object-cover transition-transform hover:scale-125" />
                <img src={halal} alt="" className="absolute w-28 right-0 bottom-0"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title font-playpen">{foodName}</h2>
                <p className="text-lg font-semibold">Category: {foodCategory}</p>
                <p className="text-lg font-semibold">Stock: {quantity}</p>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Price: {price} $</p>
                    <Link to={`/foodDetails/${_id}`}>
                        <button className="btn normal-case bg-[#061606] hover:border-[#64a13b]  text-[#ffa600] font-playpen">Show details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;