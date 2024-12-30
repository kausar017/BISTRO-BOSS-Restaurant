import featured from '../../assets/home/featured.jpg'
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
const FeaturedItem = () => {
    return (
        <div className='py-10'>
            <div
                className="hero min-h-[700px] bg-fixed"
                style={{
                    backgroundImage: `url(${featured})`,
                }}>
                <div className="hero-overlay bg-black/70"></div>
                <div className="text-neutral-content">
                    <DynamicTitle
                        discription={"Check it out"}
                        title={"FROM OUR MENU"}
                    ></DynamicTitle>
                    <div className='max-w-[1000px] grid md:grid-cols-2 items-center py-10 gap-5 max px-5'>
                        <div>
                            <img className='' src={featured} alt="" />
                        </div>
                        <div>
                            <p className='text-lg'>March 20, 2023</p>
                            <h4 className='text-xl'> WHERE CAN I GET SOME?</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <div className="py-5">
                                <button className="btn border-b-4 bg-transparent text-white hover:bg-white/10 border-b-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;