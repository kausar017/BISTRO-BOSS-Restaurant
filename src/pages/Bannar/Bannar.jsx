import BistroBoss from "../Bistro Boss/BistroBoss";
import ChefRecomen from "../CHEF RECOMMENDS/ChefRecomen";
import ContactUs from "../ContactUs/ContactUs";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularManu from "../PopularManue/PopularManu";
import Slaider from "../Slaider/Slaider";
import Slaider2 from "../Slaider2/Slaider2";
import TESTIMONIALS from "../TESTIMONIALS/TESTIMONIALS";

const Bannar = () => {

    return (
        <div >
            {/* Slaider */}
            <Slaider></Slaider>
            {/* Slaider2 */}
            <Slaider2></Slaider2>
            {/* Bistro Boss */}
            <div className="w-8/12 mx-auto">
                <BistroBoss></BistroBoss>
                {/* popular manue */}
                <PopularManu></PopularManu>
                {/* Contact us */}
                <ContactUs></ContactUs>
                {/* ChefRecomen */}
                <ChefRecomen></ChefRecomen>
            </div>
            {/* FeaturedItem */}
            <FeaturedItem></FeaturedItem>
            {/* TESTIMONIALS */}
            <div className="w-8/12 mx-auto">
                <TESTIMONIALS></TESTIMONIALS>
            </div>
        </div>
    );
};

export default Bannar;