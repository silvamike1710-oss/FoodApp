function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const styles = {
    container: {
      background: "white",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    },
    title: {
      marginBottom: "10px"
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: "1px solid #eee"
    },
    itemText: {
      fontSize: "14px"
    },
    button: {
      background: "#ff4d4d",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "5px",
      cursor: "pointer"
    },
    total: {
      marginTop: "10px",
      fontWeight: "bold"
    },
    empty: {
      color: "#777",
      fontSize: "14px"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cart</h2>

      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={styles.item}>
            <span style={styles.itemText}>
              {item.name} x{item.qty}
            </span>

            <button
              style={styles.button}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3 style={styles.total}>Total: R$ {total}</h3>
    </div>
  );
}

export default Cart;