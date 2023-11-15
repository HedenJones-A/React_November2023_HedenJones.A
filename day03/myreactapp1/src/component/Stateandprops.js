import {useState} from 'react';

function Stateandprops(){
    const[name,setName]=useState("Heden");
    const[num,setNum]=useState(0);
    const[student,setStudent]=useState({name:"Heden",age:19});

    const nameHandler=()=>{
        setName("Jones");
    };
    
    const numHandler=()=>{
        let val=num;
        setNum(++val);
    };

    const stuHandler=()=>{
        setStudent({name:"Jones",age:20});
    }
        

    return(
    <div>
        <h1>State and Props</h1>
        <hr></hr>
        <h2>Hi {name}</h2>
        <h2>Number is {num}</h2>
        <h2>Student Name is {student.name} and age is {student.age}</h2>
        <button onClick={nameHandler}>Change name</button>
        <button onClick={numHandler}>Increment Number</button>
        <button onClick={stuHandler}>Student update</button>

    </div>
    );
}
export default Stateandprops;