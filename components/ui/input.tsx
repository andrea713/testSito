'use client';
import { useState } from "react";


interface InputProps{
  nome: string;
  inType: string;
  placeholder?: string;
}


export default function Input({nome, inType, placeholder}: InputProps){

    const [input, setInput] = useState("");

    const handleChange = (e:any) => setInput(e.target.value);


    return(
        <div className=" flex flex-col">
            <label>{nome}</label>
            <input 
                type={inType}
                name={nome}
                placeholder={placeholder}
            />
        </div>
    )
}