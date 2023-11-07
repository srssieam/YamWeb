import { useState } from "react";
import { useEffect } from "react";
import UseAxios from "../hooks/UseAxios";
import ItemCard from "../Pages/FoodItems/itemCard";
import { Link } from "react-router-dom";


const TopItems = () => {
    const [items, setItems] = useState([])
    const axios = UseAxios();
    useEffect(() => {
        axios.get('/foodItems?topItem=topItem')
            .then(res => setItems(res.data))
    }, [axios])

    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-8 md:my-16">
            <h1 className="text-xl font-playpen font-semibold text-center text-[#64a13b]">Top Items</h1>
            <h1 className="text-5xl text-center font-playpen">Our top ordered items</h1>
            <div className="my-9 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    items?.map((item) => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
            <div className="flex justify-center">
                <Link to='/items'><button className="px-3 py-2 bg-[#061606] text-xl rounded-lg font-semibold hover:bg-[#122c12] text-yellow-700">See all items</button></Link>
            </div>
        </div>
    );
};

export default TopItems;