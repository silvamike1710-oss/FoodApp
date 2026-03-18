function ProductCard({ product, addToCart }) {

  const styles = {
    card: {
      background: "white",
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer"
    },
    image: {
      width: "100%",
      borderRadius: "10px",
      marginBottom: "10px"
    },
    name: {
      margin: "10px 0 5px",
      fontSize: "16px"
    },
    price: {
      color: "#555",
      marginBottom: "10px"
    },
    button: {
      width: "100%",
      padding: "8px",
      border: "none",
      background: "#ff4d4d",
      color: "white",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold"
    }
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      }}
    >
      <img src={product.image} style={styles.image} />

      <h3 style={styles.name}>{product.name}</h3>

      <p style={styles.price}>R$ {product.price}</p>

      <button
        style={styles.button}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;