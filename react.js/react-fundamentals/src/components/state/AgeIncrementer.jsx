import {useState} from 'react';

function AgeIncrementer() {
    const [age, setAge] = useState(21);

    function handleClick() {
        setAge(age+1);
    }

    return (
        <>
            <p>Age: {age}</p>
            <button onClick={handleClick}>
                Increment Age
            </button>
        </>
    );
}

export default AgeIncrementer;