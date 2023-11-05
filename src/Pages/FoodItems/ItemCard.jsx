import { Link } from "react-router-dom";
import test1 from '../../assets/food img/test.jpg'

const ItemCard = () => {
    return (
        <div className="card card-compact bg-base-100 border shadow-[#64a13b] shadow-xl" data-aos="flip-up" data-aos-duration="2000">
            <figure className="h-[250px]"><img src={test1} alt="img" className="h-full w-full transition-transform hover:scale-125" /></figure>
            <div className="card-body">
                <h2 className="card-title font-playpen">burger</h2>
                <p className="text-lg font-semibold">category: fast food</p>
                <div className="card-actions flex justify-between items-center">
                    <p className="text-lg font-semibold">Price: 15 $</p>
                    <Link to=''>
                        <button className="btn normal-case bg-[#061606] hover:border-[#64a13b]  text-[#ffa600] font-playpen">Show details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;