import { useEffect, useState } from "react";
import ItemCard from "./itemCard";


const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:7000/v1/api/foodItems")
            .then(res => res.json())
            .then(data =>setItems(data))
    }, [])
    console.log(items)
    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-8 md:my-16">
            <h1 className="text-xl font-playpen font-semibold text-center text-[#64a13b]">Food Items</h1>
            <h1 className="text-5xl text-center font-playpen">Our Specials Items</h1>
            <div className="my-9 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    items?.map((item)=><ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default Items;