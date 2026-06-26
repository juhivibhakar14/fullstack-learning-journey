function SearchBox(){
        function handleChange(event){
            event.preventDefault();
            console.log(event.target.value);
        }
    return (
        <input onChange={handleChange} />
    );
}
export default SearchBox;