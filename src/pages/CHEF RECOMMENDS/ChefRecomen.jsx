import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import image from '../../assets/home/slide1.jpg'

const ChefRecomen = () => {
    return (
        <>
            <div>
                <DynamicTitle
                    discription={"Should Try"}
                    title={"CHEF RECOMMENDS"}
                ></DynamicTitle>
            </div>
            <div className="py-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5 items-center justify-center">
                <div className="card bg-base-200 rounded-none">
                    <figure className="">
                        <img
                            src={image}
                            alt="Shoes"
                            className="w-full h-80 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="flex flex-col justify-center items-center ">
                            <button className="btn border-b-4 bg-base-300 border-b-[#B18717]">Viwe Full Manu</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 rounded-none">
                    <figure className="">
                        <img
                            src={image}
                            alt="Shoes"
                            className="w-full h-80 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="flex flex-col justify-center items-center ">
                            <button className="btn border-b-4 bg-base-300 border-b-[#B18717]">Viwe Full Manu</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 rounded-none">
                    <figure className="">
                        <img
                            src={image}
                            alt="Shoes"
                            className="w-full h-80 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="flex flex-col justify-center items-center ">
                            <button className="btn border-b-4 bg-base-300 border-b-[#B18717]">Viwe Full Manu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefRecomen;