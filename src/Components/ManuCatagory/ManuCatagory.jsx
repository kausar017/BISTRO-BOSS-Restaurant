
import PropTypes from 'prop-types';
import ManueItem from '../../pages/PopularManue/ManueItem/ManueItem';
import { Link } from 'react-router-dom';

const ManuCatagory = ({ data, title }) => {
    console.log(data);

    return (
        <div className='lg:w-9/12 mx-auto max-sm:px-5 md:px-5'>
            <div className="grid lg:grid-cols-2 items-center gap-5 py-8 max-sm:p-5">
                {
                    data?.map(item => <ManueItem key={item._id} data={item}></ManueItem>)
                }
            </div>
            <div className="flex flex-col justify-center items-center">
                <Link to={`/ourshop/${title}`} className="btn border-b-4 bg-transparent hover:bg-white/10 border-b-gray-700">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

ManuCatagory.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ManuCatagory;