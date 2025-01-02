
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import ManueItem from "./ManueItem/ManueItem";
import Hooks from "../../Hooks/Hooks";
import Loader from "../Loader/Loader";


const PopularManu = () => {


    const [manu, loding] = Hooks()
    // console.log(manu);

    if (loding) {
        return <Loader></Loader>
    }
    const popularItems = manu.filter(item => item.category === 'popular')
    console.log(popularItems);

    return (
        <div className="container mx-auto lg:pt-20 md:pt-72 max-sm:pt-24">
            <DynamicTitle
                discription={"Check it out"}
                title={"FROM OUR MENU"}
            ></DynamicTitle>
            <div className="grid lg:grid-cols-2 items-center gap-5 py-8 max-sm:p-5">
                {
                    popularItems?.map(data => <ManueItem key={data._id} data={data}></ManueItem>)
                }
            </div>
            <div className="flex flex-col justify-center items-center pb-5 ">
                <button className="btn border-b-4 border-b-gray-700">Viwe Full Manu</button>
            </div>
        </div >
    );
};

export default PopularManu;