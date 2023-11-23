import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/reducer/cartSlice";
import { setLogout } from "../store/reducer/authSlice";
import Cart from './Cart';
import React, {useState} from "react";

import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit'; 

const Header = ()=>{
    const {cartItems} = useSelector((state)=>state.cart)
    const [show, setShow] = useState(false);
    const brojElemenata = cartItems?.length || 0;
    const dispatch = useDispatch();
    const handleOpenCart = (open)=>{
        dispatch(toggleCart(open));
    }

    const handleLogout = () => {
        dispatch(setLogout());
    }
    // const {title, author, image, price} = props;
    const {user} = useSelector((state)=>({...state.auth}))

    
    return(
       <header>
        <div className="container">
          <div className="navbar_">
        <MDBNavbar fixed="top" expand='lg' style={{backgroundColor: "#f5f5f5"}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'
         style={{ color: "#191970", fontWeight: "600", fontSize: "30px", fontFamily: "Charm" }}>
            My Bookstore
        </MDBNavbarBrand>

        <MDBCollapse navbar show={show}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
          {user?.result?._id && (
              <h5 style={{ marginRight: "30px", marginTop: "17px", color: "$text-color" }}>
                 {user?.result?.name}
              </h5>
            )}
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>
                <p className='header-text'>Home</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            {user?.result?._id ? (
               <MDBNavbarItem>
                <MDBNavbarLink href='/login' className='header-text'>
                    <p className='header-text' onClick={()=>handleLogout()}>Logout</p>
                </MDBNavbarLink> </MDBNavbarItem>
                ):(
             <MDBNavbarItem>
                <MDBNavbarLink href='/login' style={{color:"#191970",paddingTop:'1.1rem', fontWeight:"bold", textTransform:"uppercase"}}>Login</MDBNavbarLink>
            </MDBNavbarItem>)}
                  </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink className='header-text'>
                    <div onClick={()=>handleOpenCart(true)}>
                        <img src="./images/bag-icon.svg" alt="bag"></img>
                        <span>{brojElemenata}</span>
                    </div>
                </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <Cart></Cart>
    </div>
    
    
        </div>
     
       </header>
       
    );
}

export default Header;

