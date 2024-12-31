import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {

    const { image, name, recipe } = item

    return (
        <div className="card bg-base-100 shadow-lg rounded-none transition hover:scale-105">
            <figure>
                <img
                    src={image}
                    alt={image}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn border-b-4 bg-transparent hover:bg-black/60 border-b-gray-700">add to cart</button>
                </div>
            </div>
        </div>
    );
};


FoodCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default FoodCard;