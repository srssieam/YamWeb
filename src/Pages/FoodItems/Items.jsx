import { useEffect, useState } from "react";
import ItemCard from "./itemCard";
import allfood from "../../assets/category/allfood.png"
import pizza from "../../assets/category/pizza.png"
import burger from "../../assets/category/burger.png"
import salad from "../../assets/category/salad.png"
import drinks from "../../assets/category/drinks.png"
import asian from "../../assets/category/asian.png"
import bakery from "../../assets/category/bakery.png"
import UseAxios from "../../hooks/UseAxios";
import { useLoaderData } from "react-router-dom";


const Items = () => {
    const [items, setItems] = useState([]);
    const [categoryItem, setCategoryItem] = useState(null)
    const axios = UseAxios();

    // pagination
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const getCount = useLoaderData();
    const foodCount = getCount.data.count
    console.log(foodCount)
            // calculate total number of required page 
    const numberOfPages = Math.ceil(foodCount / itemsPerPage);
    console.log(numberOfPages) 

    const pages = [...Array(numberOfPages).keys()]
    console.log(pages)
    const handleItemsPerPages = e =>{
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val)
    }

    useEffect(() => {
        axios.get(`/foodItems`)
            .then(res => setItems(res.data))
    }, [axios])
    console.log(items)

    const handleCategory = (categoryName) =>{
        const findItems = items.filter(item => item.foodCategory === categoryName);
        setCategoryItem(findItems)
    }

    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-8 md:my-16">
            <h1 className="text-xl font-playpen font-semibold text-center text-[#64a13b]">Food Items</h1>
            <h1 className="text-5xl text-center font-playpen">Our Special Menus</h1>
            <div className="flex justify-center">
                <div onClick={()=>setCategoryItem(items)} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={allfood} className="h-10 w-10" alt="" />
                    <p>All</p>
                </div>
                <div onClick={()=>handleCategory('Pizza')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={pizza} className="h-10 w-10" alt="" />
                    <p>Pizza</p>
                </div>
                <div onClick={()=>handleCategory('Burger')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={burger} className="h-10 w-10" alt="" />
                    <p>Burger</p>
                </div>
                <div onClick={()=>handleCategory('Salad')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={salad} className="h-10 w-10" alt="" />
                    <p>Salad</p>
                </div>
                <div onClick={()=>handleCategory('Drink')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={drinks} className="h-10 w-10" alt="" />
                    <p>Drinks</p>
                </div>
                <div onClick={()=>handleCategory('Asian')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={asian} className="h-10 w-10" alt="" />
                    <p>Asian</p>
                </div>
                <div onClick={()=>handleCategory('Bakery')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={bakery} className="h-10 w-10" alt="" />
                    <p>Bakery</p>
                </div>
            </div>
            <div className="my-9 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                   categoryItem ? categoryItem.map((item)=><ItemCard key={item._id} item={item}></ItemCard>)
                   :
                   items?.map((item)=><ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
            <div className='text-[#ffa600] flex justify-center'>
                {
                    pages.map(page => <button className="bg-[#023302] hover:bg-[#64a13b] py-1 px-3 border border-[#ffa600] rounded" key={page}>{page}</button>)
                }
                 <select value={itemsPerPage} onChange={handleItemsPerPages} name="" id="">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="11">11</option>
                </select>
            </div>
        </div>
    );
};

export default Items;