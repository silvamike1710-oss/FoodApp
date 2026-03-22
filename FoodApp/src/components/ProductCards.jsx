import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  }
`;

const Name = styled.h3`
  margin: 10px 0 5px;
  font-size: 16px;
`;

const Price = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  background: #ff4d4d;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

function ProductCard({ product, addToCart }) {
  return (
    <Card>
      <Name>{product.name}</Name>

      <Price>R$ {product.price}</Price>

      <Button onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Card>
  );
}

export default ProductCard;