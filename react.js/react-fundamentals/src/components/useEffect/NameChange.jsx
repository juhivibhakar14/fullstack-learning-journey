import {useEffect, useState} from 'react';

function NameDetecter(){
const [name, setName] = useState("");

useEffect(() => {
console.log("Name Updated:",name)},[name]);

function handleChange(event){
setName(event.target.value);
}
return (
  <>
    <h1>Hello, {name}</h1>
    <input type="text" onChange={handleChange} />
  </>
);
}
export default NameDetecter;