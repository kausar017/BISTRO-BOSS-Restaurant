import { useEffect, useState } from "react";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import ManueItem from "./ManueItem/ManueItem";

const PopularManu = () => {

    const [manue, setManue] = useState([])
    console.log(manue);

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setManue(popularItems)
            })
            .catch(error => {
                console.log(error, 'error fatching Data');

            })
    }, [])

    return (
        <div className="container mx-auto lg:pt-20 md:pt-72 max-sm:pt-24">
            <DynamicTitle
                discription={"Check it out"}
                title={"FROM OUR MENU"}
            ></DynamicTitle>
            <div className="grid lg:grid-cols-2 items-center gap-5 py-8 max-sm:p-5">
                {
                    manue?.map(data => <ManueItem key={data._id} data={data}></ManueItem>)
                }
            </div>
            <div className="flex flex-col justify-center items-center pb-5 ">
                <button className="btn border-b-4 border-b-gray-700">Viwe Full Manu</button>
            </div>
        </div >
    );
};

export default PopularManu;