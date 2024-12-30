import imge from '../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <>
            <div className="py-10 relative group">
                <img className='w-full h-full object-cover' src={imge} alt={imge} />

                <div className='w-full md:w-8/12 mx-auto text-center border p-4 md:p-10 bg-white absolute top-20 md:top-36 left-1/2 transform -translate-x-1/2'>
                    <h1 className="text-xl md:text-3xl font-bold mb-4">Bistro Boss</h1>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni ap    eriam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BistroBoss;
