import React, { useState, useContext, useRef } from "react"
import MockForm from "./Mockform"
import { UserContext } from "../App";

export default function Concepts() {
    const [formtype , setFormType] = useState("");
    const user = useContext(UserContext);
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.style.color = "red"
    }
    return (
        <div className="container">
         <h1>Welcome - {user}</h1>   
        <input type="text" value={formtype} ref={inputElement} onChange={(e) => setFormType(e.target.value)}/>
        <button onClick={focusInput}> focusInput </button>
        <MockForm name={formtype} />
        </div>
    )  
};
