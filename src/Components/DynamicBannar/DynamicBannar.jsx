import imge from '../../assets/home/chef-service.jpg'
import PropTypes from 'prop-types';

const DynamicBannar = ({ title, discription }) => {
    return (

        <div
            className="hero py-40"
            style={{
                backgroundImage: `url(${imge})`,
            }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content text-center ">
                <div className="max-w- lg:w-[800px] md:w-[600px] max-sm:px-10 bg-black/60 text-white min-h-60 flex flex-col justify-center items-center">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 px-5">
                        {discription}
                    </p>

                </div>
            </div>
        </div>

    );
};

DynamicBannar.propTypes = {
    title: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired
};

export default DynamicBannar;