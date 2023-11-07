import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const loadedItems = useLoaderData();
    const [foodItem, setFoodItem] = useState(loadedItems);
    const { _id, foodName, foodImage, foodCategory, quantity, price, name, email, foodOrigin, description } = foodItem.data
    const axios = UseAxios();

    const handleUpdate= e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.Img.value;
        const foodCategory = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const name = form.userName.value;
        const email = form.email.value;
        const foodOrigin = form.country.value;
        const description = form.description.value;

        console.log(foodName, foodImage, foodCategory, quantity, price, name, email, foodOrigin, description)
        const updatedItem = {
            foodName,
            foodImage, 
            foodCategory, 
            quantity, 
            price, 
            name, 
            email, 
            foodOrigin, 
            description 
        }
        axios.put(`/foodItems/${_id}`, updatedItem)
        .then(res=>{
            console.log(res)
            if (res.data.modifiedCount>0) {
                Swal.fire(
                    'Good job!',
                    'Item updated successfully',
                    'success'
                )
                window.location.pathname='myAddedItems'
            }
        })

    }

    return (
        <div className=" md:my-11 text-2xl font-semibold space-y-7 m-4">
            <h1 className="text-2xl md:text-5xl font-playpen font-semibold text-center text-[#64a13b]">Add a Food Item</h1>
            <div className="lg:p-0">
                <form onSubmit={handleUpdate} className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Food name :</span>
                        </label>
                        <input type="text" name="foodName" placeholder="Enter food name" defaultValue={foodName} className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control text-xl">
                        <label htmlFor="category" className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Select Category:</span>
                        </label>
                        <select className="input border border-[#ffa600]" id="category" name="productType" defaultValue={foodCategory} required>
                            <option value="select category" disabled>Select food</option>
                            <option value="Burger">Burger</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Salad">Salad</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Drink">Drink</option>
                            <option value="Asian">Asian</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Image url :</span>
                        </label>
                        <input type="text" name="Img" placeholder="Enter food image url" defaultValue={foodImage} className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Added by :</span>
                        </label>
                        <input type="text" name="userName" defaultValue={name} className="input border border-[#ffa600]" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Your Email :</span>
                        </label>
                        <input type="text" name="email" placeholder="Enter your email" defaultValue={email} className="input border border-[#ffa600]" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]"> Food Origin (Country) :</span>
                        </label>
                        <input type="text" name="country" placeholder="Enter food origin" defaultValue={foodOrigin} className="input border border-[#ffa600]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Price :</span>
                        </label>
                        <input type="number" name="price" placeholder="Enter price" defaultValue={price} className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Quantity :</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Enter quantity" defaultValue={quantity} className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Short description :</span>
                        </label>
                        <textarea cols="50" rows="5" name="description" placeholder="Type short description" defaultValue={description} className=" textarea border border-[#ffa600] resize-none" required />
                    </div>
                    <div className="form-control my-4">
                        <button className="btn bg-[#144940] normal-case text-xl mx-auto hover:bg-[#28685d] text-[#ffa600]">Update</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdatePage;