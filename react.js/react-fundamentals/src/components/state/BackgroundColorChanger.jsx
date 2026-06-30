import {useState} from 'react';

function ColorChanger(){
    const [color, setColor] = useState('lightgray');

    function handleClick(){
        setColor('red');
    }

    return (
        <>
            <p style={{backgroundColor: color}}>Background Color: {color}</p>
            <button onClick={handleClick}>
                Change Background Color
            </button>
        </>
    );
}
export default ColorChanger;