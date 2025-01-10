import { useQuery } from "@tanstack/react-query";
import AuthHooks from "../../Authentication/Provaider/AuthHooks";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";
import { FaDatabase } from "react-icons/fa";
import { compareAsc, format } from "date-fns";

const PaymentHIstroy = () => {

    const { user } = AuthHooks()
    // console.log(user);
    const axiosSecure = useAxiosSecure()

    const { data: payments } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })

    console.log(payments);

    return (
        <div>
            <div>
                <DynamicTitle
                    discription="At a Glance!"
                    title="PAYMENT HISTORY"
                ></DynamicTitle>
            </div>

            <div className="px-8 py-8">

                {
                    payments?.length == 0 ?



                        <div className="text-4xl flex flex-col justify-center items-center">
                            Data Not Found
                            <FaDatabase size={50}></FaDatabase>
                        </div>
                        :
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr className="bg-[#D1A054] text-white rounded-t-lg">
                                        <th></th>
                                        <th>EMAIL</th>
                                        <th>CATEGORY</th>
                                        <th>TOTAL PRICE</th>
                                        <th>PAYMENT DATE</th>
                                    </tr>
                                </thead>
                                <tbody className="text-base-500">
                                    {
                                        payments?.map((item, index) =>
                                            <tr key={item._id}>
                                                <th><span>{index + 1}</span></th>
                                                <td>{item?.email}</td>
                                                <td>{item?.status}</td>
                                                <td>{item?.price}</td>
                                                <th>{format(new Date(item?.date), "P")}</th>
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
};

export default PaymentHIstroy;