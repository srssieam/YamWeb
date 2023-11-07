import Swal from "sweetalert2";
import UseAxios from "../hooks/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const AddFoodItem = () => {
    const { user } = useContext(AuthContext)
    const axios = UseAxios();

    const handleAddFood = e => {
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

        const newFoodItem = {
            foodName,
            foodImage,
            foodCategory,
            quantity,
            price,
            name,
            email,
            foodOrigin,
            description,
            OrderedCount: 0
        }

        axios.post('/foodItems', newFoodItem)
        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire(
                    'Added new item',
                    'Your food is added successfullY',
                    'success'
                )
                form.reset();
                window.location.pathname='myAddedItems'
            }
        })
        .catch(err => console.log(err));

    }

    return (
        <div className=" md:my-11 text-2xl font-semibold space-y-7 m-4">
            <h1 className="text-2xl md:text-5xl font-playpen font-semibold text-center text-[#64a13b]">Add a Food Item</h1>
            <div className="lg:p-0">
                <form onSubmit={handleAddFood} className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Food name :</span>
                        </label>
                        <input type="text" name="foodName" placeholder="Enter food name" className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control text-xl">
                        <label htmlFor="category" className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Select Category:</span>
                        </label>
                        <select className="input border border-[#ffa600]" id="category" name="productType" defaultValue='select category' required>
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
                        <input type="text" name="Img" placeholder="Enter food image url" className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Added by :</span>
                        </label>
                        <input type="text" name="userName" value={user?.displayName} className="input border border-[#ffa600]" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Your Email :</span>
                        </label>
                        <input type="text" name="email" placeholder="Enter your email" value={user?.email} className="input border border-[#ffa600]" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]"> Food Origin (Country) :</span>
                        </label>
                        <input type="text" name="country" placeholder="Enter food origin" className="input border border-[#ffa600]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Price :</span>
                        </label>
                        <input type="number" name="price" placeholder="Enter price" className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Quantity :</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Enter quantity" className="input border border-[#ffa600]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-playpen text-[#64a13b]">Short description :</span>
                        </label>
                        <textarea cols="50" rows="5" name="description" placeholder="Type short description" className=" textarea border border-[#ffa600] resize-none" required />
                    </div>
                    <div className="form-control my-4">
                        <button className="btn bg-[#144940] normal-case text-xl mx-auto hover:bg-[#28685d] text-[#ffa600]">Add Food</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddFoodItem;