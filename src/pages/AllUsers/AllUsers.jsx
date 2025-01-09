import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    console.log(users);
    const handelDelete = (user) => {
        console.log(user._id);
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };
    const handaleAdmin = users => {
        axiosSecure.patch(`users/admin/${users._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${users.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }

            })

    }
    return (
        <div className="bg-gray-600/20 p-5">
            <div>
                <DynamicTitle
                    discription="How many??"
                    title="MANAGE ALL USERS"
                ></DynamicTitle>
            </div>
            <div className="bg-white rounded-md m-10 p-5">
                <p className='text-xl uppercase font-bold'>Total User: {users.length}</p>
                {
                    users?.length === 0 ?


                        <>
                            <div className="flex flex-col justify-center items-center py-3">
                                <h3 className="text-4xl font-bold">Data Not Found</h3>
                                <FaDatabase size={50} ></FaDatabase>
                            </div>

                        </>

                        :
                        <div className="max-sm:overflow-x-scroll">
                            <table className="table text-center">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>ROLE</th>
                                        <th></th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users?.map((Item, index) =>
                                            <tr key={Item._id} className="hover">
                                                <th>{index + 1}</th>
                                                <td>{Item?.name}</td>
                                                <td>{Item?.email}</td>
                                                {Item.role === 'admin' ? 'Admin' : <td onClick={() => handaleAdmin(Item)} className="btn  bg-orange-600 text-white text-lg"><FaUsers></FaUsers> </td>}
                                                <th></th>
                                                <td onClick={(e) => handelDelete(Item)} className="btn bg-orange-600 text-red-900 text-xl "><MdDeleteOutline></MdDeleteOutline> </td>
                                            </tr>

                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                }

            </div>
        </div>
    );
}

export default AllUsers;