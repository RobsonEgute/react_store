import React from "react";
import ProductCategoriesBar from "../Components/Categories";
import BasicSlider from '../Components/Slider';
import SpecialDealsBar from '../Components/SpecialDeals';
import { CategoriesCarousel, BestDealsCarousel, BestSellingCarousel, ClothingCarousel, TechCarousel, ApplianceCarousel, OfficialStoreCarousel } from "../Components/ProductCarousel";
import HorizontalCat from "../Components/horizontalCat";
import TopSellingPdts from "../Components/TopSelling";
import FlashSalesPdts from "../Components/FlashSales";
import Footer from "../Components/Footer";

const HomePage = () => {
    return (
        <div>
            <section className='homePage_front'>
                <div className='category_cont'> <ProductCategoriesBar /> </div>
                <div className='home_slider_cont'> <BasicSlider /> </div>
                <div className='special_deals_cont'> <SpecialDealsBar /> </div>
            </section>

            <section className="homepage_carousel">
                <div className="best_deals hmpg_carousel"> <CategoriesCarousel /> </div>
                <div className="best_selling hmpg_carousel"> <BestDealsCarousel /> </div>
                <div className="clothing_carousel hmpg_carousel"> <BestSellingCarousel /> </div>
                <div className="tech_carousel hmpg_carousel"> <ClothingCarousel /> </div>
                <div className="appliance_carousel hmpg_carousel"> <TechCarousel /> </div>
                <div className="official_store_carousel hmpg_carousel"> <ApplianceCarousel /> </div>
                <div className="categories_carousel hmpg_carousel"> <OfficialStoreCarousel /> </div>
            </section>
            <section> <div className='cat_horz'> <HorizontalCat /> </div> </section>
            <section className="pdt_carsl_sec"> <TopSellingPdts /> </section>
            <section className="flash_sales_carsl"> <FlashSalesPdts /> </section>
            <section className="footerSec"><Footer /></section>
        </div>
    )
}

export default HomePage;