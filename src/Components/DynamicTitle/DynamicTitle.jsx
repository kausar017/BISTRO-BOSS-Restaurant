import React from 'react';
import PropTypes from 'prop-types';

const DynamicTitle = ({ discription, title }) => {
    return (
        <div className='flex flex-col justify-center items-center py-5'>
            <p className='text-[#D99904] pb-2 italic'>---{discription}---</p>
            <h1 className='md:text-4xl border-y-2 py-2 uppercase'>{title}</h1>
        </div>
    );
};

DynamicTitle.propTypes = {
    discription: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default DynamicTitle;