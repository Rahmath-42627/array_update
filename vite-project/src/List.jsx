import React, {useState} from "react";
function List(){

const [name,setName] = useState("")

function updateName(){
    const newName =document.getElementById("myname").value
    document.getElementById("myname").value=""
    setName(newName)
}
    return(
        <>
        <div className="login-container">
        <h1>Login UI</h1>
        <h2>Name:{name}</h2>
        <input type="text" id="myname" placeholder="Enter YOUR NAME"/>
        <button onClick={updateName}>Submit</button>
        </div>
        
        </>
    )
}
export default List;