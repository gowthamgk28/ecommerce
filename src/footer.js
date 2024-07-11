import React from 'react'
import './footer.css'
import { FaPiggyBank , FaWallet } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import logo from './images/logo.webp'



const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='left_box'>
                    <div className='box'> 
                        <div className='icon_box'>
                        <FaPiggyBank />
                        </div>
                        <div className='detail'> 
                            <h3>Great Saving</h3>
                            <p>Lorem ipsum dolar sit amet,</p>
                        </div>
                        
                    </div>

                    <div className='box'> 
                        <div className='icon_box'>
                        <MdLocalShipping />

                        </div>
                        <div className='detail'> 
                            <h3>Free delivary</h3>
                            <p>Lorem ipsum dolar sit amet,</p>
                        </div>

                        
                    </div>


                    <div className='box'> 
                        <div className='icon_box'>
                        <BiSupport />

                        </div>
                        <div className='detail'> 
                            <h3>24*7 support</h3>
                            <p>Lorem ipsum dolar sit amet,</p>
                        </div>

                        
                    </div>

                    <div className='box'> 
                        <div className='icon_box'>
                        <FaWallet />


                        </div>
                        <div className='detail'> 
                            <h3>money back</h3>
                            <p>Lorem ipsum dolar sit amet,</p>
                        </div>

                        <div className='bottom'>
                            <div className='boxs'>
                                <h3>your account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>Sales</li>
                                </ul>
                            </div>

                            <div className='boxs'>
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivary</li>
                                    <li>Track order</li>
                                    <li>New product</li>
                                    <li>Old Product</li>
                                </ul>
                            </div>

                            <div className='boxs'>
                                <h3>Contact us</h3>
                                <ul>
                                    <li>4005,Silver Point India</li>
                                    <li>(012)9876554321</li>
                                    <li>info@gmail.com</li>
                                    
                                </ul>
                            </div>
                        </div>

                        
                    </div>

                   



                </div> 
                    <div className='right_box'>
                        <div className='header'> 
                            <img src={logo} alt='logo'></img>
                            <p>gfgfnglfgef fgdf.lgmg dlfgfgdf dfgdfg</p>
                        </div>
                    </div>
            </div>
            </div>
        
    </>
  )
}

export default Footer
