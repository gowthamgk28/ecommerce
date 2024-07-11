import React, { useEffect, useState } from 'react';
import './home.css';
import Homeproduct from './home_product';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import test from './images/T1.avif';
import { FaFacebookF, FaCartShopping } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import multibanner1 from "./images/Multi-Banner-1.avif";
import multibanner2 from "./images/Multi-banner-2.avif";
import multibanner3 from "./images/Multi-Banner-3.webp";
import multibanner4 from "./images/Multi-banner-4.avif";
import multibanner5 from "./images/Multi-Banner-5.webp";

const Home = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filterCate = (x) => {
    const filteredProduct = Homeproduct.filter((e) => e.type === x);
    setTrendingProduct(filteredProduct);
  };

  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  const productCategory = () => {
    const newCategory = Homeproduct.filter((x) => x.type === 'new');
    setNewProduct(newCategory);

    const featuredCategory = Homeproduct.filter((x) => x.type === 'featured');
    setFeaturedProduct(featuredCategory);

    const topCategory = Homeproduct.filter((x) => x.type === 'top');
    setTopProduct(topCategory);
  };

  useEffect(() => {
    productCategory();
  }, []);

  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='content'>
            <h3>Silver Aluminium</h3>
            <h2>Apple Watch</h2>
            <p>30% off on your first order</p>
            <Link to='/shop' id='but' className='link'>Shop now</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={allTrendingProduct}>Trending Product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filterCate('new')}>New</h3>
                  <h3 onClick={() => filterCate('featured')}>Featured</h3>
                  <h3 onClick={() => filterCate('top')}>Top Selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {trendingProduct.map((e) => (
                    <div className='box' key={e.id}>
                      <div className='img_box'>
                        <img src={e.img} alt={e.name} />
                        <div className='icon'>
                          <div className='icon_box'>
                            <FaEye />
                          </div>
                          <div className='icon_box'>
                            <IoMdHeart />
                          </div>
                        </div>
                      </div>
                      <div className='info'>
                        <h3>{e.name}</h3>
                        <p>${e.price}</p>
                        <button onClick={()=>(alert("product added to cart"))} className='btn'>Add to cart</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button>Show more</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Our Testimonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src={test} alt='testimonial' />
                    </div>
                    <div className='info'>
                      <h3>Stephan Robot</h3>
                      <h4>Web Designer</h4>
                      <p>React front end developer, software developer, react developer</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>Join our mailing list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off' />
                    <button>Subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <FaFacebookF />
                      </div>
                      <div className='icon'>
                        <FaXTwitter />
                      </div>
                      <div className='icon'>
                        <FaInstagram />
                      </div>
                      <div className='icon'>
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src={multibanner1} alt='multibanner1' />
              </div>
              <div className='box'>
                <img src={multibanner2} alt='multibanner2' />
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src={multibanner3} alt='multibanner3' />
                <img src={multibanner4} alt='multibanner4' />
              </div>
              <div className='bottom'>
                <img src={multibanner5} alt='multibanner5' />
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>

          <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {newProduct.map((e) => (
                <div className='productbox' key={e.id}>
                  <div className='img_box'>
                    <img src={e.img} alt='product' />
                    <div className='detail'>
                      <h3>{e.name}</h3>
                      <p>${e.price}</p>
                      <div className='icon'>
                        <button><FaEye /></button>
                        <button><IoMdHeart /></button>
                        <button><FaCartShopping /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {featuredProduct.map((e) => (
                <div className='productbox' key={e.id}>
                  <div className='img_box'>
                    <img src={e.img} alt='product' />
                    <div className='detail'>
                      <h3>{e.name}</h3>
                      <p>${e.price}</p>
                      <div className='icon'>
                        <button><FaEye /></button>
                        <button><IoMdHeart /></button>
                        <button><FaCartShopping /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {topProduct.map((e) => (
                <div className='productbox' key={e.id}>
                  <div className='img_box'>
                    <img src={e.img} alt='product' />
                    <div className='detail'>
                      <h3>{e.name}</h3>
                      <p>${e.price}</p>
                      <div className='icon'>
                        <button><FaEye /></button>
                        <button><IoMdHeart /></button>
                        <button><FaCartShopping /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
