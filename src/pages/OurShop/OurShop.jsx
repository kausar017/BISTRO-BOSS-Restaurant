
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import DynamicCover from "../../Components/DynamicCover/DynamicCover";
import bannar from '../../assets/shop/banner2.jpg'
import { useState } from "react";
import Hooks from "../../Hooks/Hooks";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OurShop = () => {

    const categoris = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams();
    console.log(category);

    const initialIndex = categoris.indexOf(category?.toLowerCase());
    const [tebIndex, setTabIndex] = useState(initialIndex)
    console.log(tebIndex);
    
    const [manue] = Hooks()
    console.log(manue);

    const dessert = manue.filter(item => item.category === 'dessert')
    console.log(dessert);
    
    const pizza = manue.filter(item => item.category === 'pizza')
    const soup = manue.filter(item => item.category === 'soup')
    const salad = manue.filter(item => item.category === 'salad')
    const drinks = manue.filter(item => item.category === 'drinks')

    return (

        <div>
            <Helmet>
                <title>BISTRO BOSS | OUR SHOP </title>
            </Helmet>

            <DynamicCover
                title='OUR MENU'
                discriptoin='Would you like to try a dish?'
                banar={bannar}
            ></DynamicCover>
            <section className="w-8/12 mx-auto py-10">
                <Tabs defaultIndex={tebIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'text-md flex justify-center items-center'}>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel className={'pt-10'}>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 items-center justify-center">
                            {
                                salad?.map(item =>

                                    <FoodCard key={item._id} item={item}></FoodCard>
                                )
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 items-center justify-center">
                            {
                                pizza?.map(item =>

                                    <FoodCard key={item._id} item={item}></FoodCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 items-center justify-center">
                            {
                                soup?.map(item =>

                                    <FoodCard key={item._id} item={item}></FoodCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-5 items-center justify-center">
                            {
                                dessert?.map(item =>

                                    <FoodCard key={item._id} item={item}></FoodCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 items-center justify-center">
                            {
                                drinks?.map(item =>

                                    <FoodCard key={item._id} item={item}></FoodCard>
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default OurShop;