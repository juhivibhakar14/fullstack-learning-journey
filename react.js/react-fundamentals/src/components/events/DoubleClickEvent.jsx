function DoubleCLick(){

    function handleDoubleCLick(){
        console.log("Double CLick)")
    }
    return (
        <button onDoubleClick={handleDoubleCLick}>
            Double CLick me
        </button>
    )
}
export default DoubleCLick;