import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxios from "../hooks/UseAxios";
import Swal from "sweetalert2";


const MyOrderedFood = () => {
    const { user } = useContext(AuthContext);
    const [orderedItem, setOrderedItem] = useState([]);
    const axios = UseAxios();
    console.log(user.email)

    useEffect(()=>{
        axios.get(`/purchasedItems?buyerEmail=${user?.email}`)
        .then(res=> setOrderedItem(res.data));
    },[])


    const handleDelete =(id)=>{

        axios.delete(`/purchasedItems/${id}`)
        .then(res => {
            console.log(res)
                Swal.fire(
                    'Deleted!',
                    'Your order has been deleted.',
                    'success'
                )
                const remaining = orderedItem.filter(item => item._id !== id);
                setOrderedItem(remaining)        
        })
    }

    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-10">
            <h1 className="text-2xl md:text-4xl font-playpen text-[#64a13b]">Total ordered items: {orderedItem.length}</h1>
            <div className="space-y-6 my-9">
                {
                    orderedItem?.map(item=>{
                        return <div key={item._id} className="grid md:grid-cols-4 gap-6 border-b-2 border-t-2 items-center py-4">
                                    <div>
                                        <img src={item.foodImage} className="w-full max-h-[200px] object-cover" alt="" />
                                    </div>
                                    <div>
                                        <p><strong>Item:</strong> {item.foodName}</p>
                                        <p><strong>Quantity:</strong> {item.purchaseQuantity}</p>
                                        <p><strong>Price:</strong> {item.price}</p>
                                    </div>
                                    <div>
                                        <p><strong>Buyer:</strong> {item.buyerName}</p>
                                        <p><strong>Email:</strong> {item.buyerEmail}</p>
                                        <p><strong>Purchase Date:</strong> {item.date}</p>
                                    </div>
                                    <div className="flex justify-center md:justify-end">
                                        <button onClick={()=>handleDelete(item._id)} className="py-2 px-4 rounded bg-red-700 md:mx-7 font-playpen text-white font-semibold">Delete</button>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyOrderedFood;