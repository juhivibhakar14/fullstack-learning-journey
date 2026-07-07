import {useState} from 'react';

function DisableButton(){
    const [text, setText] = useState('');
    function handleChange(event){
        setText(event.target.value);
    }
    return(
        <>
        <input type = "text"
        value = {text}
        onChange = {handleChange}
        />
    <button disabled={!text}>Submit</button>
        </>
    )
}
export default DisableButton;