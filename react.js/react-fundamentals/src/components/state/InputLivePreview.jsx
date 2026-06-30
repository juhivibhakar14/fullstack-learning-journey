import {useState} from 'react';

function LivePreview(){
    const [text, setText] = useState('');

    function handleChange(event){
        setText(event.target.value);
    }
    return (
        <>
        <input type = "text" 
        value = {text}
        onChange = {handleChange}
        />
        <p>Live Preview: {text}</p>
        </>
    )
}
export default LivePreview;