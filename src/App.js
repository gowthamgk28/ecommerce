// import React, { useState } from 'react';
// import Nav from './nav';
// import Rout from './rout';
// import Footer from './footer';
// import Homeproduct from './home_product';
// import { BrowserRouter } from 'react-router-dom';

// const App = () => {
//   // Add to cart
//   const [cart, setCart] = useState([]);
  
//   // Shop page product
//   const [shop, setShop] = useState(Homeproduct);
  
//   // Search filter
//   const [search, setSearch] = useState('');

//   // Shop category filter
//   const Filter = (x) => {
//     const catefilter = Homeproduct.filter((product) => product.cat === x);
//     setShop(catefilter);
//   };

//   const AllcateFilter = () => {
//     setShop(Homeproduct);
//   };

//   // Search filter
//   const searchProduct = () => {
//     const searchFilter = Homeproduct.filter((x) => x.name.toLowerCase().includes(search.toLowerCase()));
//     setShop(searchFilter);
//   };

//   // Add to cart
//   const addToCart = (product) => {   
//     const exist = cart.find((x) => x.id === product.id);
//     if (exist) {
//       alert("This product is already added in cart");
//     } else {
//       setCart([...cart, {...product, qty: 1}]);
//       alert("Added to cart");
//     }
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
//         <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} AllcateFilter={AllcateFilter} addToCart={addToCart} />
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Nav from './nav';
import Rout from './rout';
import Footer from './footer';
import Homeproduct from './home_product';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  // Add To cart
  const [cart, setCart] = useState([])
  //Shop Page product
  const [shop, setShop] = useState(Homeproduct)
    //Shop Search Filter
  const [search, setSearch] = useState('')
  //Shop category filter
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) => 
    {
      return product.cat === x 
    })
    setShop(catefilter)
  }
  const AllcateFilter = () =>
  {
    setShop(Homeproduct)
  }
  //Shop Search Filter
 
// const App = () => {
//   // Add to cart
//   const [cart, setCart] = useState([]);

//   // Shop page products
//   const [shop, setShop] = useState(Homeproduct);

//   // Search filter
//   const [search, setSearch] = useState('');

//   // Shop category filter
//   const Filter = (x) => {
//     const catefilter = Homeproduct.filter((product) => product.cat === x);
//     setShop(catefilter);
//   };

//   const AllcateFilter = () => {
//     setShop(Homeproduct);
//   };

//   // Search filter
  const searchProduct = () => {
    const searchfilter = Homeproduct.filter((x) => x.name.toLowerCase().includes(search.toLowerCase()));
    setShop(searchfilter);
   };

  // Add to cart
  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This product is already added to the cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };

  return (
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
      <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} AllcateFilter={AllcateFilter} addToCart={addToCart} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

