import { useEffect, useState } from "react";

const Hooks = () => {
    const [manu, setManu] = useState([])
    // console.log(manu);
    
    const [loding, setLoding] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/manu')
            .then(res => res.json())
            .then(data => {
                setManu(data)
                setLoding(false)
            })
            .catch(error => {
                console.log(error, 'error fatching Data');

            })
    }, [])

    return [manu, loding]
};

export default Hooks;