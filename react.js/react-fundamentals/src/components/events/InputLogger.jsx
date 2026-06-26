function InputLogger(){

    function handleChange(event){
        console.log(event.target.value);
    }

    return (
        <input onChange={handleChange} />
    );
}export default InputLogger;