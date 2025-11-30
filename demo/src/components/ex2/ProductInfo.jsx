const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: "$1200",
    availability: "In Stock",
  };
  return (
    <div>
      <p>Product Name = {product.name}</p>
      <p>Product Price = {product.price} </p>
      <p>Product availability = {product.availability}</p>
    </div>
  );
};
export default ProductInfo;
