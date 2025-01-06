import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";
import AuthHooks from "../../Authentication/Provaider/AuthHooks";

const UseCard = () => {
    // tan stak query
    const axiosSecure = useAxiosSecure();
    const { user } = AuthHooks();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default UseCard;