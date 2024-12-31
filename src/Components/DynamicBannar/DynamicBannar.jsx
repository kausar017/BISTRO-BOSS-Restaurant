import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const DynamicBannar = ({ title, discription, bacground }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bacground}
            bgImageAlt="the dog"
            strength={-500}

        >
            <div
                className="hero py-40"
               >
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

        </Parallax>
    );
};

DynamicBannar.propTypes = {
    title: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
    // bacground: PropTypes.imge.isRequired
};

export default DynamicBannar;