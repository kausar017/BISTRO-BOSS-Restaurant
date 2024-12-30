
import PropTypes from 'prop-types';

const ManueItem = ({ data }) => {
    const { name, recipe, image, price } = data
    return (
        <div className=''>
            <div className='flex gap-4 items-center'>
                <div className=''>
                    <img className='rounded-b-full w-32 rounded-r-full transition hover:scale-105 object-cover' src={image} alt={image} />
                </div>
                <div className='flex gap-2'>
                    <div>
                        <h3 className='text-3xl uppercase'>{name}------------</h3>
                        <p className='text-gray-400'>{recipe}</p>
                    </div>
                    <div>
                        <p className='text-yellow-500 text-xl'>${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ManueItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default ManueItem;