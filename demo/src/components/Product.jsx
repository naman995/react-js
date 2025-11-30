const Product = (props) => {
  return (
    <main>
      <h2>Product Name: {props.name}</h2>
      <p>Product Price: ${props.price}</p>
    </main>
  );
};

export default Product;
