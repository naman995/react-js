const Greeting = () => {
  const curr_date = Date();
  const mssg = "Good Morning";
  const name = "john";
  const date = new Date();
  return (
    <>
      <h1>{mssg}</h1>
      <p>{curr_date}</p>
      <p>{name}</p>
      <p>
        {date.getDate()}-{date.getMonth()}-
        {date.getFullYear()}
      </p>
    </>
  );
};

export default Greeting;
