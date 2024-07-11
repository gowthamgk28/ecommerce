import React, { useState } from 'react';
import './shop.css';
import shopleft from './images/shop_left.avif';
import shoptop from './images/shop_top.webp';
import { FaEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";


const Shop = ({shop, Filter, AllcateFilter, addtocart}) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false)
    // Detail Page Data
    const [detail, setDetail] = useState({})
    //Showing Detail Box
    const detailpage = (product) => 
    {
        console.log('Product clicked:', product);

        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
        {
            
            setShowDetail(false)
        }
    return (
        <>
           
            {
                showDetail ? 
                <>
                <div className='product_details'>
                    <button className='close_btn' onClick={closedetail}><RiCloseCircleLine /></button>
                    <div className='container'>
                        <div className='img_box'>
                            <img src={detail.img} alt='img'></img>
                        </div>
                        <div className='info'>
                            <h4># {detail.cat}</h4>
                            <h2>{detail.Name}</h2>
                            <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                            <h3>${detail.price}</h3>
                            <button onClick={()=>(alert("product is added to cart"))}>Add To Cart </button>
                        </div>
                    </div>
                </div>
                </>
                 : null
            } 
            <div className='shop'>
                <h2># shop</h2>
                <p>Home . Shop</p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>All categories</h3>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => AllcateFilter()}>#All</li>
                                    <li onClick={() => Filter("tv")}>#tv</li>
                                    <li onClick={() => Filter("laptop")}>#laptop</li>
                                    <li onClick={() => Filter("watch")}>#watch</li>
                                    <li onClick={() => Filter("speaker")}>#speaker</li>
                                    <li onClick={() => Filter("electronic")}>#electronic</li>
                                    <li onClick={() => Filter("headphone")}>#headphone</li>
                                    <li onClick={() => Filter("phone")}>#phone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src={shopleft} alt='shopleft'></img>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src={shoptop} alt='shoptop'></img>
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop product</h2>
                            <div className='product_container'>
                                {shop.map((e) => (
                                    <div key={e.id} className='box'>
                                        <div className='img_box'>
                                            <img src={e.img} alt='img'></img>
                                            <div className='icon'>
                                                <li onClick={()=>(alert("product is added to liked list"))}><IoMdHeart  /></li>
                                                <li onClick={() => detailpage(e)}><FaEye /></li>

                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{e.name}</h3>
                                            <p>{e.price}</p>
                                            <button onClick={()=>(alert("product is added to cart"))}> Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
