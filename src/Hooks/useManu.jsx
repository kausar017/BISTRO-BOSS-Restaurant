import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPiblic from "./useAxiosPiblic";

const useManu = () => {

    const axiosPiblic = useAxiosPiblic()

    // const [manu, setManu] = useState([])
    // console.log(manu);

    // const [loding, setLoding] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/manu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setManu(data)
    //             setLoding(false)
    //         })
    //         .catch(error => {
    //             console.log(error, 'error fatching Data');

    //         })
    // }, [])
    const { data: manu, isPending: loding, refetch } = useQuery({
        queryKey: ['manu'],
        queryFn: async () => {
            const res = await axiosPiblic.get('/manu')
            return res.data
        }
    })


    return [manu, loding, refetch]
};

export default useManu;