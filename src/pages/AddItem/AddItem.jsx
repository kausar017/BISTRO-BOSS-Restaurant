import { useForm } from "react-hook-form";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPiblic from "../../Hooks/useAxiosPiblic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/Provaider/useAxiosSecure";

const AddItem = () => {
    const image_hosting_BB = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_BB}`
    const { register, handleSubmit, reset } = useForm()

    const axiosPiblic = useAxiosPiblic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        try {
            // uploade imgae imagebb--
            const res = await axiosPiblic.post(hosting_api, imageFile, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }

            })
            if (res.data.success) {
                const manuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                const manuRes = await axiosSecure.post('/manu', manuItem)
                if (manuRes.data.insertedId) {
                    reset()
                    Swal.fire('Item successfully Added')
                }
            }
            console.log("Upload Successful:", res.data);

        } catch (error) {
            console.error("Upload Error:", error);

        }

    }

    return (
        <div className="bg-white">
            <DynamicTitle
                discription="What's new?"
                title="ADD AN ITEM"
            ></DynamicTitle>


            <div className="bg-[#F3F3F3] mx-10 p-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="Recipe name*" className="input input-bordered input-lg w-full " required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='default' {...register("category", { required: true })} className="select select-bordered input-lg w-full ">
                                <option disabled value={'default'}>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soups</option>
                                <option value="dessert">desserts</option>
                                <option value="drinks">drinks</option>

                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered input-lg w-full " required />
                        </div>
                    </div>
                    <div>

                        <label className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-64" placeholder="Recipe Details......"></textarea>

                        </label>
                    </div>
                    <div className="py-5">
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-disabled rounded-none w-full max-w-xs" />
                    </div>
                    <div>
                        <button className="btn rounded-none px-5 bg-[#D1A054] text-white">Add Item<FaUtensils></FaUtensils> </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddItem;