import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background: ${props => (props.$disabled ? "#aaa" : "#25d366")};
  color: white;
  border-radius: 5px;
  cursor: ${props => (props.$disabled ? "not-allowed" : "pointer")};
  font-weight: bold;

  &:hover {
    opacity: ${props => (props.$disabled ? 1 : 0.9)};
  }
`;

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

Total: R$ ${total.toFixed(2)}

Name: ${name}
Address: ${address}
`;

    window.open(
      `https://wa.me/5555999999999?text=${encodeURIComponent(message)}`
    );
  };
  
  const isDisabled = cart.length === 0 || !name || !address;

  return (
    <Container>
      <Title>Checkout</Title>

      <Input
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <Button
        onClick={sendWhatsapp}
        disabled={isDisabled}
        $disabled={isDisabled}
      >
        Order via WhatsApp
      </Button>
    </Container>
  );
}

export default CheckoutForm;