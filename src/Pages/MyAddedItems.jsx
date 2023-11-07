import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";


const MyAddedItems = () => {
    const { user } = useContext(AuthContext);
    const [addedItem, setAddedItem] = useState([]);
    const axios = UseAxios();

    console.log(user.email)


    useEffect(() => {
        // axios.get(`/foodItems?addBy=${addBy}`)
        axios.get(`/foodItems?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setAddedItem(res.data)
            });
    }, [])

    const handleDelete = (id) => {
        axios.delete(`/foodItems/${id}`)
            .then(res => {
                console.log(res)
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                )
                const remaining = addedItem.filter(item => item._id !== id);
                setAddedItem(remaining)
            })
    }


    console.log(addedItem)

    return (
        <div className="max-w-[1250px] mx-auto px-6 lg:px-0 my-12">
            <h1 className="text-2xl md:text-4xl font-playpen text-[#64a13b]">Total added items: {addedItem.length}</h1>
            <div>
                {addedItem.length == 0 &&
                    <div className="flex h-[50vh] items-center justify-center">
                        <h1 className="text-4xl font-playpen text-center">You have not added any item Yet</h1>
                    </div>}
            </div>
            <div className=" my-9 gap-10 grid lg:grid-cols-2 ">
                {
                    addedItem?.map(item => {
                        return <div key={item._id} className="grid md:grid-cols-3 gap-6 border-b-2 border-t-2 items-center py-4">
                            <div>
                                <img src={item.foodImage} className="w-[150px] max-h-[100px] object-cover" alt="" />
                            </div>
                            <div>
                                <p><strong>Item:</strong> {item.foodName}</p>
                                <p><strong>Quantity:</strong> {item.quantity}</p>
                                <p><strong>Price:</strong> {item.price}</p>
                                <p><strong>Origin:</strong> {item.foodOrigin}</p>
                            </div>
                            <div className="flex flex-col gap-6 justify-center md:justify-end">
                                <Link to={`/updateFood/${item._id}`} className="py-2 px-4 rounded bg-green-700 md:mx-7 font-playpen text-white font-semibold text-center"><button>Update</button></Link>
                                <button onClick={() => handleDelete(item._id)} className="py-2 px-4 rounded bg-red-700 md:mx-7 font-playpen text-white font-semibold">Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default MyAddedItems;