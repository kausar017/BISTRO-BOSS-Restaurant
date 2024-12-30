import imge from '../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <>

            <div
                className="hero py-32"
                style={{
                    backgroundImage: `url(${imge})`,
                }}>
                <div className=""></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w- lg:w-[800px] md:w-[600px] max-sm:px-10 bg-white text-black min-h-60 flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni ap    eriam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>

                    </div>
                </div>
            </div>

        </>
    );
};

export default BistroBoss;
