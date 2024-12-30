
import PropTypes from 'prop-types';
import ManueItem from '../../pages/PopularManue/ManueItem/ManueItem';

const ManuCatagory = ({ data }) => {
    return (
        <div className='lg:w-9/12 mx-auto max-sm:px-5 md:px-5'>
            <div className="grid lg:grid-cols-2 items-center gap-5 py-8 max-sm:p-5">
                {
                    data?.map(data => <ManueItem key={data._id} data={data}></ManueItem>)
                }
            </div>
            <div className="flex flex-col justify-center items-center">
                <button className="btn border-b-4 bg-transparent hover:bg-white/10 border-b-gray-700">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

ManuCatagory.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ManuCatagory;