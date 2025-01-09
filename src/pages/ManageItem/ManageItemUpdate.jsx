

import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Authentication/Provaider/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItemUpdate = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()

    const navigat = useNavigate()



    const data = useLoaderData()
    console.log(data,);

    const { name, category, price, recipe, _id } = data || {};

    const onSubmit = async (data) => {
        console.log(data)
        const manuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
        }
        try {
            const manuRes = await axiosSecure.patch(`/manu/${_id}`, manuItem);
            if (manuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire('Item successfully Updated');
                navigat('/dasbord/manageItems')
            } else {
                Swal.fire('No changes detected, item not updated');
            }
        } catch (error) {
            Swal.fire(`${error} Item not Updated`);
        }
    }
    return (
        <div>
            <h1 className='text-4xl text-center py-5'>UPDATE ITEM</h1>

            <div className="bg-[#F3F3F3] mx-10 p-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true })} defaultValue={name} type="text" placeholder="Recipe name*" className="input input-bordered input-lg w-full " required />
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        <div>
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered input-lg w-full ">
                                <option disabled >Category</option>
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
                            <input {...register("price", { required: true })} type="number" defaultValue={price} placeholder="Price" className="input input-bordered input-lg w-full " required />
                        </div>
                    </div>
                    <div>

                        <label className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea {...register("recipe", { required: true })} defaultValue={recipe} className="textarea textarea-bordered h-64" placeholder="Recipe Details......"></textarea>

                        </label>
                    </div>

                    <div className='py-5 flex flex-col justify-center items-center'>
                        <button className="btn rounded-none px-10 bg-[#D1A054] text-white">Update Recipe Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default ManageItemUpdate;