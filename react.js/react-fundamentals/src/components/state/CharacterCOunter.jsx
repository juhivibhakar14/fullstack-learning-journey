import {useState} from 'react' ;

function CharacterCounter(){
    const [text, setText] =useState('');

    function handleChange(event){
        setText(event.target.value)
    }
    return (
        <>
        <input type = "text"
        value = {text}
        onChange = {handleChange}
        />
        <p>Character Count: {text.length}</p>
        </>
    )
}
export default CharacterCounter;
