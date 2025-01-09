import { AiOutlineDelete } from "react-icons/ai";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import { FaDatabase } from "react-icons/fa6";
import useManu from "../../Hooks/useManu";
import { MdSystemUpdateAlt } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const ManageItem = () => {

    const [manue, loading, refetch] = useManu();
    const axiosSecure = useAxiosSecure();
    // console.log(manue);

    if (loading) {
        return <Loader />;
    }

    // const handleUpdate = async (id) => {
    //     console.log(id);
    // };

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`manu/${id}`);
                    console.log(res.data);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `deleted success`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                } catch (error) {
                    console.error("Error deleting item:", error);
                }
            }
        });
    };

    return (
        <div>
            <div>
                <DynamicTitle
                    discription="Hurry Up!"
                    title="MANAGE ALL ITEMS"
                ></DynamicTitle>
            </div>
            <div>
                <div className="md:flex justify-around">
                    <h3 className="text-2xl font-bold">
                        Total orders: {manue.length}
                    </h3>
                    <p></p>
                    <p></p>
                </div>
                <div className="max-sm:overflow-x-scroll px-8 py-8 ">
                    {manue?.length === 0 ? (
                        <div className="text-4xl flex flex-col justify-center items-center">
                            Data Not Found
                            <FaDatabase size={50}></FaDatabase>
                        </div>
                    ) : (
                        <div>
                            <table className="table">
                                <thead>
                                    <tr className="bg-[#D1A054] text-white rounded-t-lg">
                                        <th></th>
                                        <th>ITEM IMAGE</th>
                                        <th>ITEM NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {manue?.map((item, index) => (
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
                                                                alt="Item"
                                                            />
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
                                                <Link
                                                    to={`/dasbord/update/${item._id}`}
                                                    className="bg-red-600 btn btn-sm text-white"
                                                >
                                                    <MdSystemUpdateAlt />
                                                </Link>

                                            </th>
                                            <th className="pl-10">
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="bg-red-600 btn btn-sm text-white"
                                                >
                                                    <AiOutlineDelete size={20} />
                                                </button>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageItem;
