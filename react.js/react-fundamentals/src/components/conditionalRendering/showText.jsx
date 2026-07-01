import {useState} from 'react';

function ShowText(){
    const [show, setShow]= useState(false);

    function toggleShow(){
        setShow(!show);
    }

    return(
        <>
        <p>Hey, Juhi Here</p>
        <p>i am react developer </p>
        <button onClick={toggleShow}>Show</button>
        {show && <p>holaaaa</p>}
        </>
    )

}
export default ShowText;