import { useEffect, useState } from "react";

const Hooks = () => {
    const [manue, setManue] = useState([])
    const [loding, setLoding] = useState(true)
    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                setManue(data)
                setLoding(false)
            })
            .catch(error => {
                console.log(error, 'error fatching Data');

            })
    }, [])

    return [manue, loding]
};

export default Hooks;