import { AiOutlineDelete } from "react-icons/ai";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import UseCard from "../../Hooks/useCard/UseCard";
import { FaDatabase } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = UseCard()
    // console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);
    const axiosSecure = useAxiosSecure()

    const handelDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {


            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)

                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div>
            <DynamicTitle
                discription={'My Cart'}
                title={'WANNA ADD MORE?'}
            ></DynamicTitle>
            <div>
                <div className="flex lg:flex-row md:flex-row max-sm:flex-col space-y-3 items-center justify-around ">
                    <h3 className="text-2xl font-bold">Total orders: {cart.length}</h3>
                    <h3 className="text-2xl font-bold">Total price: ${totalPrice.toFixed(2)}</h3>
                    {!cart.length == 0 ?
                        <Link to={'/dasbord/Payment'}>
                            <button className="btn bg-[#D1A054] text-white">play</button>
                        </Link>
                        :
                        <button disabled className="btn bg-[#D1A054] text-white">play</button>
                    }
                </div>
                <div className="max-sm:overflow-x-scroll px-8 py-8 ">

                    {
                        cart?.length == 0 ?



                            <div className="text-4xl flex flex-col justify-center items-center">
                                Data Not Found
                                <FaDatabase size={50}></FaDatabase>
                            </div>
                            :
                            <div>
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className="bg-[#D1A054] text-white rounded-t-lg">
                                            <th>
                                            </th>
                                            <th>ITEM IMAGE</th>
                                            <th>ITEM NAME</th>
                                            <th>PRICE</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            cart?.map((item, index) =>

                                                <tr key={item._id}>
                                                    <th>
                                                        <span>{index + 1}</span>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src={item?.image}
                                                                        alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="font-bold">{item?.name}</div>
                                                    </td>
                                                    <td>
                                                        <p>{item?.price}</p>
                                                    </td>

                                                    <th className="pl-10">
                                                        <button
                                                            onClick={() => handelDelete(item._id)}
                                                            className="bg-red-600 btn btn-sm text-white"><AiOutlineDelete size={20}></AiOutlineDelete> </button>
                                                    </th>
                                                </tr>

                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>

                    }

                </div>
            </div>
        </div>
    );
};

export default MyCart;