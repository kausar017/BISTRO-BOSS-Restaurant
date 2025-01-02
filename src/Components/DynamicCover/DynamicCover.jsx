import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const DynamicCover = ({ title, discriptoin, banar}) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={banar}
            bgImageAlt="the dog"
            strength={-200}

        >
            <div className="hero md:min-h-[700px]"
            >
                <div className=""></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="lg:w-[800px] md:w-[600px] max-sm:px-5 bg-black/60 min-h-60 flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {discriptoin}
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

DynamicCover.propTypes = {
    title: PropTypes.string.isRequired,
    discriptoin: PropTypes.string.isRequired
};

export default DynamicCover;

