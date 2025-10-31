'use client'

import { useState } from "react"


export default function Preventivo(){

    const[form,setFormValue] = useState({nome:'', email:'',messaggio:''})
    const [errore, setErrore] = useState('')
    
    const change = (e: any) =>{
        const {name, value} = e.target;
        setFormValue({...form,[name]: value})
    }

    const validazioneNome = (valore: string) => {

        if (valore.trim() ==='') return 'il campo nome non può essere vuoto.';
        if (/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/.test(valore)) return 'Il nome non può contenere numeri o simboli.';

        return ''
    }

    const exitBlur = () => {
        const messaggio = validazioneNome(form.nome)
        setErrore(messaggio);
    }






    return(
        <>
        <div className=" flex flex-col w-full max-w-xl h-fit gap-4 p-6 rounded-3xl bg-white/5 md:min-w-md">
            
            <div className=" flex flex-col">

                <label className=" h-[18px]">Nome</label>

                <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={change}
                onBlur={exitBlur}
                placeholder="Inserisci il tuo nome"
                className={`${errore ? "border-red-500/50" : ""}`}            
                />

                {errore &&(<span className=" mt-1 text-red-500/70">{errore}</span>)}
            </div>

            <div className=" flex flex-col">

                <label className=" h-[18px]">E-mail</label>

                <input
                type="text"
                name="nome"
                value={form.email}
                onChange={change}
                onBlur={exitBlur}
                placeholder="Inserisci il tuo nome"
                className={`${errore ? "border-red-500/50" : ""}`}            
                />

                {errore &&(<span className=" mt-1 text-red-500/70">{errore}</span>)}
            </div>

            <div className=" flex flex-col">
                <label className=" h-[18px]">Messaggio</label>

                <textarea
                name=""
                id=""
                value={form.messaggio}
                onChange={change}
                onBlur={exitBlur}
                placeholder="Parlaci del tuo progetto"
                className={`${errore ? "border-red-500/50" : ""}`} 
                />
                {errore &&(<span className=" mt-1 text-red-500/70">{errore}</span>)}
                
            </div>

            <input type="button" value="" />

            

        </div>

        
        
        </>
    )
}