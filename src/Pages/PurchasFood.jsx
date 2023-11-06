import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import purchase from '../assets/purchase.png'
import Swal from "sweetalert2";

import UseAxios from "../hooks/UseAxios";


const PurchasFood = () => {
    const { user } = useContext(AuthContext)
    const axios = UseAxios()
    const loadedFoodItem = useLoaderData();
    console.log(loadedFoodItem)
    const { _id, foodName, quantity, price, foodImage } = loadedFoodItem.data;


    const handlePurchase = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const purchaseQuantity = form.quantity.value;
        const date = form.date.value;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        console.log(foodName, price, purchaseQuantity, date, buyerName, buyerEmail)

        const purchaseInfo = {
            buyerName,
            buyerEmail,
            foodName,
            price,
            date,
            purchaseQuantity,
            foodImage
        }

        if (purchaseQuantity > quantity) {
            Swal.fire({
                icon: 'error',
                title: "This quantity of item is not available",
                text: "We are sorry for that",
            });
            return;
        }

        axios.post('/purchasedItems', purchaseInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire(
                        'Thank You!',
                        'Purchase successful!',
                        'success'
                    )
                    form.reset();
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div className=" max-w-[1250px] mx-auto my-11">
            <h1 className="text-3xl mb-5 lg:text-5xl text-center font-playpen font-semibold">Ready to purchase ?</h1>
            <div className="px-6 pb-6 lg:px-0 flex flex-col-reverse lg:flex-row lg:items-center">
                <form onSubmit={handlePurchase} className="space-y-5 lg:flex-1">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div className="space-y-3">
                            <label htmlFor="foodName" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Item name : </label><br />
                            <input type="text" name="foodName" id="" placeholder="food item" defaultValue={foodName} className="p-3 w-full border rounded-lg" required />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="price" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Price $ : </label><br />
                            <input type="number" name="price" id="" placeholder="Due Amount" defaultValue={price} className="p-3 w-full border rounded-lg" required />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="quantity" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Quantity : </label><br />
                            <input type="number" name="quantity" id="" placeholder="Due Amount" defaultValue={1} className="p-3 w-full border rounded-lg" required />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="date" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Purchase date : </label><br />
                            <input type="date" name="date" id="" className="p-3 w-full border rounded-lg" required />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="name" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Buyer name : </label><br />
                            <input type="text" name="name" id="" placeholder="buyer" defaultValue={user?.displayName} className="p-3 w-full border rounded-lg" readOnly />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className=' text-[#64a13b] font-semibold text-lg lg:text-2xl'>Buyer email : </label><br />
                            <input type="email" name="email" id="" placeholder="Email" defaultValue={user?.email} className="p-3 w-full border rounded-lg" readOnly />
                        </div>
                    </div>
                    <button className='btn w-full text-xl bg-[#061606] hover:border-[#64a13b]  text-[#ffa600] font-playpen normal-case font-semibold'>Purchase</button>
                </form>
                <div className="lg:flex-1">
                    <img src={purchase} alt="" className="w-[350px] mx-auto lg:w-full" />
                </div>
            </div>
        </div>
    );
};

export default PurchasFood;