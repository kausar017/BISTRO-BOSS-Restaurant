import { Helmet } from 'react-helmet-async';
import DynamicBannar from '../../Components/DynamicBannar/DynamicBannar';
import DynamicCover from '../../Components/DynamicCover/DynamicCover';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';
import Hooks from '../../Hooks/Hooks';
import ManuCatagory from '../../Components/ManuCatagory/ManuCatagory';

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
                    title={"DESSERTS"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={dessert}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
                    title={"PIZZA"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={pizza}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
                    title={"SALADS"}
                    discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></DynamicBannar>
                <div className='py-10'>
                    <ManuCatagory data={salad}></ManuCatagory>
                </div>
            </section>
            <section>
                <DynamicBannar
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