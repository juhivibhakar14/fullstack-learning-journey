import {useState} from 'react';

function SizeChanger(){
    const [size, setSize] = useState(16);

    function handleClick(){
        setSize(size + 2);
    }

    return (
        <>
            <p style={{fontSize: `${size}px`}}>Font Size: {size}px</p>
            <button onClick={handleClick}>
                Increase Font Size
            </button>
        </>
    );
}
export default SizeChanger;