function Cat({ name }) {
  return (
    // <React.Fragment>

    // <> is Short for react fragment
    <>  
      <h1>The cat's name is {name}</h1>
      <p>He's good.</p>
    {/* </React.Fragment> */}
    </>
  );
}

ReactDOM.render(<Cat name="Jungle" />, document.getElementById("root"));