import { useState, useEffect } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCards";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  //Styles
  const styles = {
    page: {
      padding: "20px",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    },
    title: {
      textAlign: "center",
      marginBottom: "20px"
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "20px"
    },
    products: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "15px"
    },
    sidebar: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Food Ordering</h1>

      <div style={styles.layout}>
        
        {/* Products */}
        <div style={styles.products}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart + Checkout */}
        <div style={styles.sidebar}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
          <CheckoutForm cart={cart} />
        </div>

      </div>
    </div>
  );
}

export default App;