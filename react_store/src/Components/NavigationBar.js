import React, { useState, useEffect } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowUp } from "react-icons/md";




export const Logo = () => {
    return (
        <div className='logo'>
          MY_APP_LOGO
        </div>
    )
}

export const SearchBar = () => {
    return (
        <div className='searchCont'>
          <input type='search' className='search_bar' placeholder='search products, brands and categories'/>
          <button className='search_bar_btn'>search</button>
        </div>
    )
}

export const List = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [mouseCord, setMouseCord] = useState({Xcord: 0, Ycord: 0})

    document.addEventListener('mousemove', (e) => {
        setMouseCord({Xcord: e.clientX, Ycord: e.clientY})
        //console.log(mouseCord);
    })


    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
      }
    
      const handleDropup = () => {
        setIsOpen(!isOpen)
      }
      
      useEffect(() => {
      });
    
      document.addEventListener('click', () => {
        setIsOpen(false);
      })
    

    return (
        <div className='listCont'>
            <ul>
                <Link to="/home" className='link linkDef home'><FaHome className='icon home_icon'/>Home</Link>
                <Link to="/account" className='link linkDef account' id='account' onMouseEnter={handleDropdown}><VscAccount className='icon account_icon'/>Account{
                    isOpen 
                    ? <MdKeyboardArrowUp className='arrow_up' />
                    : <MdOutlineKeyboardArrowDown className='arrow_down' />

                } </Link>
                <Link to="/cart" className='link linkDef home'><span className='icon_span'><HiOutlineShoppingCart className='icon saved_items_icon' /></span>Cart</Link>
            </ul>
        { isOpen && (
            <div className='account_dropdown dropdown_menu' id='accnt_dropdown' onMouseLeave={handleDropup}>
                { isLoggedIn ? 
                (<>
                <div><Link to="/logout" className='link logout'><span className='icon_span'><BiLogOut className='icon logout_icon'/></span>Logout</Link></div>
                </>)
                : 
                (<>
                <div><Link to="/login" className='link login dropdown'><span className='icon_span'><FiLogIn className='icon login_icon'/></span>Login</Link></div>
                <div><Link to="/register" className='link register dropdown'><span className='icon_span'><HiOutlineUserAdd className='icon register_icon'/></span>Register</Link></div>
                </>)
            }
                <div><Link to="/saved_items" className='link register dropdown'><span className='icon_span'><FcLike className='icon saved_items_icon'/></span>Saved Items</Link></div>
            </div>
        )}
      </div>
    )
}