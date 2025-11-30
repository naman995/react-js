const Product = ({ name, price }) => {
  return (
    <main>
      <h2>Product Name: {name}</h2>
      <p>Product Price: ${price}</p>
    </main>
  );
};

export default Product;
