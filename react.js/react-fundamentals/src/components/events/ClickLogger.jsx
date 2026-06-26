function ClickLogger() {

  function handleClick() {
    console.log("Button Clicked");
  }

  return (
   <button onClick={handleClick}>Click Me</button>
  );
}

export default ClickLogger;