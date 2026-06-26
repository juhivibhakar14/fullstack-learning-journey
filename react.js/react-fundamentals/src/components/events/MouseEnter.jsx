function MouseEnter(){
function handleMouseEnter(){
    console.log("Mouse Entered");
}
return(
    <div onMouseEnter={handleMouseEnter}>
        <p>Hover over me!</p>
    </div>
)
}export default MouseEnter;