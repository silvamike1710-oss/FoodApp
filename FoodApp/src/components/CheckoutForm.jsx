import { useState } from "react";

function CheckoutForm({ cart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const sendWhatsapp = () => {
    const items = cart
      .map(item => `- ${item.name} x${item.qty}`)
      .join("\n");

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    const message = `
Order:
${items}

Total: R$ ${total}

Name: ${name}
Address: ${address}
`;

    window.open(
      `https://wa.me/5555999999999?text=${encodeURIComponent(message)}`
    );
  };

  // Styles
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
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px"
    },
    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      background: "#25d366",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold"
    },
    disabledButton: {
      background: "#aaa",
      cursor: "not-allowed"
    }
  };

  const isDisabled = cart.length === 0 || !name || !address;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>

      <input
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <button
        style={{
          ...styles.button,
          ...(isDisabled ? styles.disabledButton : {})
        }}
        onClick={sendWhatsapp}
        disabled={isDisabled}
      >
        Order via WhatsApp
      </button>
    </div>
  );
}

export default CheckoutForm;