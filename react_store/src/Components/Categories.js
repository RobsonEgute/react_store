import React from "react";
import { GiBananaBunch } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiSmartphone } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { PiTelevision } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io5";
import { PiBabyLight } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { TbDotsCircleHorizontal } from "react-icons/tb";


// homepage vertical categories block

const ProductCategoriesBar = () => {


    return (
        <div style={{width: '90%', height: '90%'}}>
            <ul className="cat_ul" style={{ textDecoration: 'none', listStyleType: 'none', color: 'white'}}>
                <li className="cat_li li_1"><a href="#"><GiBananaBunch className="cat_icon"/> Supermarket </a></li>
                <li className="cat_li li_2"><a href='#'><GiLipstick className="cat_icon" />Health & Beauty</a> </li>
                <li className="cat_li li_3"><a href='#'><HiOutlineBuildingOffice2 className="cat_icon" />Home & Office</a> </li>
                <li className="cat_li li_4"><a href='#'><CgSmartHomeWashMachine className="cat_icon" /> Appliances</a> </li>
                <li className="cat_li li_5"><a href='#'><GiSmartphone className="cat_icon" /> Phones & Tablets</a></li>
                <li className="cat_li li_6"><a href='#'><FiMonitor className="cat_icon" /> Computing</a></li>
                <li className="cat_li li_7"><a href='#'><PiTelevision className="cat_icon" />Electronics</a> </li>
                <li className="cat_li li_8"><a href='#'><IoShirtOutline className="cat_icon" />Fashion</a> </li>
                <li className="cat_li li_9"><a href='#'><PiBabyLight className="cat_icon" />Baby Products</a> </li>
                <li className="cat_li li_10"><a href='#'><IoGameControllerOutline className="cat_icon" />Gaming</a> </li>
                <li className="cat_li li_11"><a href='#'><CiDumbbell className="cat_icon" />Sporting goods </a></li>
                <li className="cat_li li_12"><a href='#'><TbDotsCircleHorizontal className="cat_icon" />Other Categories</a> </li>
            </ul>
        </div>
    )
}

export default ProductCategoriesBar;