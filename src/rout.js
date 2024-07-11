// // import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './home';
// import Shop from './shop';
// import Cart from './cart';
// import Contact from './contact';

// const Rout = ({ shop, Filter, AllcateFilter, addToCart, cart }) => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/cart" element={<Cart cart={cart} />} />
//       <Route path="/shop" element={<Shop shop={shop} Filter={Filter} AllcateFilter={AllcateFilter} addToCart={addToCart} />} />
//       <Route path='/contact' element={<Contact />} />
//     </Routes>
//   );
// }

// export default Rout;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Contact from './contact';

const Rout = ({ shop, Filter, AllcateFilter, addToCart, cart }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
      <Route path="/shop" element={<Shop shop={shop} Filter={Filter} AllcateFilter={AllcateFilter} addToCart={addToCart} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default Rout;
