'use client';

import { useState } from "react";


interface InputProps{
  nome: string;
  inType: string;
  placeholder?: string;
}


export default function Input({nome, inType, placeholder}: InputProps){

    const [input, setInput] = useState("");

    function Handle(event:any){
        setInput(event.target.value)

    }

    return(
        <div className=" flex flex-col">
            <label>{nome}</label>
            <input 
                required
                value={input}
                onChange={Handle}
                type={inType}
                name={nome}
                placeholder={placeholder}
            />
            <p> hai scritto {input}</p>
        </div>
    )
}