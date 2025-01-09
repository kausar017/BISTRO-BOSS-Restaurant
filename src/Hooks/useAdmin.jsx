import { useQuery } from "@tanstack/react-query";
import AuthHooks from "../Authentication/Provaider/AuthHooks";
import useAxiosSecure from "../Authentication/Provaider/useAxiosSecure";

const useAdmin = () => {
    const { user } = AuthHooks()
    const axiosSecure = useAxiosSecure()
    const { data: isAdmins, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    });
    return [isAdmins, isAdminLoading]
};

export default useAdmin;