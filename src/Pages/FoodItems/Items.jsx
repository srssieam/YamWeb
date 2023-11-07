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
import { ImSearch } from 'react-icons/im';

const Items = () => {
    const [items, setItems] = useState([]);
    const [categoryItem, setCategoryItem] = useState('')
    const [search, setSearch] = useState('');
    const axios = UseAxios();

    // pagination
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(0);
    const getCount = useLoaderData();
    const foodCount = getCount.data.count
    console.log(foodCount)
    // calculate total number of required page 
    const numberOfPages = Math.ceil(foodCount / itemsPerPage);
    console.log(numberOfPages)

    const pages = [...Array(numberOfPages).keys()]
    console.log(pages)
    const handleItemsPerPages = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0)
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    // pagination api
    useEffect(() => {
        axios.get(`/foodItems?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => setItems(res.data))
    }, [axios, currentPage, itemsPerPage])
    console.log(items)

    // category api
    useEffect(() => {
        axios.get(`/foodItems?foodCategory=${categoryItem}`)
            .then(res => setItems(res.data))
    }, [axios, categoryItem])

    // search api
    useEffect(() => {
        axios.get(`/foodItems?search=${search}`)
            .then(res => setItems(res.data))
    }, [axios, search])

    const handleCategory = (categoryName) => {
        setCategoryItem(categoryName)
    }

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
        console.log(searchText)
        searchText.reset()
    }

    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-8 md:my-16">
            <h1 className="text-xl font-playpen font-semibold text-center text-[#64a13b]">Food Items</h1>
            <h1 className="text-5xl text-center font-playpen">Our Special Menus</h1>
            <div className="flex justify-center flex-wrap">
                <div onClick={() => window.location.pathname = 'items'} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={allfood} className="h-10 w-10" alt="" />
                    <p>All</p>
                </div>
                <div onClick={() => handleCategory('Pizza')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={pizza} className="h-10 w-10" alt="" />
                    <p>Pizza</p>
                </div>
                <div onClick={() => handleCategory('Burger')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={burger} className="h-10 w-10" alt="" />
                    <p>Burger</p>
                </div>
                <div onClick={() => handleCategory('Salad')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={salad} className="h-10 w-10" alt="" />
                    <p>Salad</p>
                </div>
                <div onClick={() => handleCategory('Drink')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={drinks} className="h-10 w-10" alt="" />
                    <p>Drinks</p>
                </div>
                <div onClick={() => handleCategory('Asian')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={asian} className="h-10 w-10" alt="" />
                    <p>Asian</p>
                </div>
                <div onClick={() => handleCategory('Bakery')} className="hover:text-[#ffa600] p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src={bakery} className="h-10 w-10" alt="" />
                    <p>Bakery</p>
                </div>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleSearch}>
                    <fieldset className="form-control lg:w-80">
                        <div className="relative">
                            <input type="text" placeholder="Search item" name='search' className="input border border-[#0b270b] w-full" />
                            <button type="submit" className="btn bg-[#0b270b] hover:bg-[#235c23] text-[#ffa600] border-none absolute top-0 right-0 rounded-l-none text-xl"><ImSearch></ImSearch></button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div>
                {
                    items.length === 0 && <div className="flex h-[50vh] items-center justify-center">
                        <h1 className="text-4xl font-playpen text-center">No items available</h1>
                    </div>
                }
            </div>
            <div className="my-9 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    items?.map((item) => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>
            <div className={categoryItem.length > 1  ? 'hidden' : 'text-[#ffa600] flex justify-center' }>
                <button className={currentPage === 0 ? 'hidden' : 'bg-[#023302] hover:bg-[#64a13b]  py-1 px-3 border border-[#ffa600] rounded'} onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage === page ? 'bg-[#64a13b]  py-1 px-3 border border-[#ffa600] rounded' : 'bg-[#023302] hover:bg-[#64a13b]  py-1 px-3 border border-[#ffa600] rounded'} key={page}>{page}</button>)
                }
                <button className={currentPage === pages.length - 1 ? 'hidden' : 'bg-[#023302] hover:bg-[#64a13b]  py-1 px-3 border border-[#ffa600] rounded'} onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} className="bg-[#023302]" onChange={handleItemsPerPages} name="" id="">
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