import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };


  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);

  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Navbar total_items={cart.total_items} />
        <Routes>
          <Route exact path='/' element={<Products products={products} handleAddToCart={handleAddToCart} />} />
          <Route exact path='/cart' element={<Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} handleEmptyCart={handleEmptyCart} />} />
          <Route exact path='/checkout' element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
