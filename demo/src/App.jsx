const App = () => {
  const number = [1, 2, 3, 4, 5];
  return (
    <main>
      {number.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
    </main>
  );
};

export default App;
