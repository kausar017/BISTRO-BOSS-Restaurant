import PropTypes from 'prop-types';
import AuthHooks from '../../Authentication/Provaider/AuthHooks';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Authentication/Provaider/useAxiosSecure';
import UseCard from '../../Hooks/useCard/UseCard';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item

    const axiosSecure = useAxiosSecure()
    const [, refetch] = UseCard()

    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const { user } = AuthHooks()
    // console.log(user);

    const handaleAddtoCard = () => {
        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name}, added to your card`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are Not Login",
                text: "Please Login and Add to the Card!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // navigate(from, { replace: true });
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }


    return (
        <>
            <div className="card bg-base-100 shadow-lg rounded-none transition hover:scale-105 relative">
                <figure>
                    <img
                        src={image}
                        alt={image}
                        className="rounded-xl" />
                </figure>
                <p className='absolute -right-0 m-2 px-3 py-1 rounded-lg bg-black/70 text-white'>${price}</p>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button
                            onClick={handaleAddtoCard}
                            className="btn border-b-4 bg-transparent hover:bg-black/60 border-b-gray-700">add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};


FoodCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default FoodCard;