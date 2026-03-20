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

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

const ItemText = styled.span`
  font-size: 14px;
`;

const RemoveButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

const Total = styled.h3`
  margin-top: 10px;
  font-weight: bold;
`;

const Empty = styled.p`
  color: #777;
  font-size: 14px;
`;

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Container>
      <Title>Cart</Title>

      {cart.length === 0 ? (
        <Empty>Your cart is empty</Empty>
      ) : (
        cart.map(item => (
          <Item key={item.id}>
            <ItemText>
              {item.name} x{item.qty}
            </ItemText>

            <RemoveButton onClick={() => removeFromCart(item.id)}>
              Remove
            </RemoveButton>
          </Item>
        ))
      )}

      <Total>Total: R$ {total}</Total>
    </Container>
  );
}

export default Cart;