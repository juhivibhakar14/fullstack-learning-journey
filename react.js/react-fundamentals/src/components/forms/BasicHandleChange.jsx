function BasicHandleChange() { 
    function handleChange(event) { 
      console.log("Input value:", event.target.value); 
    } 
    return ( 
      <input type="text" onChange={handleChange} /> 
    ); 
}
export default BasicHandleChange;