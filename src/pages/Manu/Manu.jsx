import { Helmet } from 'react-helmet-async';
import DynamicBannar from '../../Components/DynamicBannar/DynamicBannar';
import DynamicCover from '../../Components/DynamicCover/DynamicCover';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import Hooks from '../../Hooks/Hooks';
import ManuCatagory from '../../Components/ManuCatagory/ManuCatagory';
import banar from '../../assets/menu/banner3.jpg'

import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


const Manu = () => {

    const [manue] = Hooks()
    const dessert = manue.filter(item => item.category === 'dessert')
    const pizza = manue.filter(item => item.category === 'pizza')
    const soup = manue.filter(item => item.category === 'soup')
    const salad = manue.filter(item => item.category === 'salad')
    const offered = manue.filter(item => item.category === 'offered')

    return (

        <>
            <Helmet>
                <title>Manu </title>
            </Helmet>

            <section>
                <DynamicCover
                    title='OUR MENU'
                    discriptoin='Would you like to try a dish?'
                    banar={banar}
                ></DynamicCover>
            </section>
            <section>
                <DynamicTitle
                    discription={"Don't miss"}
                    title={"TODAY'S OFFER"}
                ></DynamicTitle>
                <div className='py-10'>
                    <ManuCatagory data={offered}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
                    bacground={dessertImg}
                    title={"DESSERTS"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={dessert}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
                    bacground={pizzaImg}
                    title={"PIZZA"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={pizza}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
                    bacground={saladImg}
                    title={"SALADS"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={salad}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
                    bacground={soupImg}
                    title={"SOUPS"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={soup}></ManuCatagory>
                </div>
            </section>
        </>

    );
};

export default Manu;