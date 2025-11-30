const Productlist = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];
  return (
    <main>
      {products.map((id) => (
        <ul key={id}>
          <li>{id.name}</li>
          <li>{id.price}</li>
        </ul>
      ))}
    </main>
  );
};

export default Productlist;
