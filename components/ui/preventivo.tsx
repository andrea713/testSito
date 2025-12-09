"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";


export default function Preventivo() {

  const [button, setButton] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    messaggio: "",
    policy: false
  });
  const [errori, setErrori] = useState<{ [key: string]: string }>({});



  const handleSend = async () => {
    const res = await fetch("/api/send/", { method: "POST" });
    const data = await res.json();

    if (!data.error) {
      toast.success("Richiesta inviata con successo!");
    } else {
      toast.error("Errore durante l'invio della richiesta.");
    }
  };


  const change = (e: any) => {
    const { name, type, checked, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  // trigger verifica quando abbandona il form
  const exitBlur = (e: any) => {
    const { name, value } = e.target;

    const messaggio = validazione(name, value);

    setErrori((prev) => ({
      ...prev,
      [name]: messaggio,
    }));
  };

  // validazione form
  const validazione = (nomeForm: any, valoreForm: any) => {
    if (valoreForm.trim() === "")
      return `Il campo ${nomeForm} non può essere vuoto.`;

    switch (nomeForm) {
      case "nome":
        if (!/^[a-zA-Z\s]+$/.test(valoreForm))
          return "Il campo nome può contenere solo lettere.";
        break;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valoreForm))
          return "L'indirizzo email inserito non è valido.";
        break;
    }

    return "";
  };

  // validazione bottone
  useEffect(() => {
    const valido = 
      form.nome.trim() != "" &&
      form.email.trim() != "" &&
      form.messaggio.trim() != "" &&
      !errori.nome &&
      !errori.email &&
      !errori.messaggio && 
      form.policy === true;

    setButton(valido);
  }, [form, errori]); // si aggiorna ogni volta che uno cambia

  return (
    <>
      <form className="flex flex-col h-full grow max-w-xl gap-6 p-6 rounded-[48px] bg-e-foreground border-2 border-foreground-border md:min-w-md">

        {/* input nome */}
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col">
            <label className="h-[18px]">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={change}
              onBlur={exitBlur}
              placeholder="Inserisci il tuo nome"
              className={`${errori.nome ? "errore" : ""}`}
            />
            {errori.nome && (
              <span className="mt-1 text-red-500/70">{errori.nome}</span>
            )}
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label className="h-[18px]">E-mail</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={change}
              onBlur={exitBlur}
              placeholder="Inserisci la tua email"
              className={`${errori.email ? "errore" : ""}`}
            />
            {errori.email && (
              <span className="mt-1 text-red-500/70">{errori.email}</span>
            )}
          </div>

          {/* messaggio */}
          <div className="flex flex-col grow">
            <label className="h-[18px]">Messaggio</label>
            <textarea
              name="messaggio"
              value={form.messaggio}
              onChange={change}
              onBlur={exitBlur}
              placeholder="Parlaci del tuo progetto"
              className={`resize-none min-h-[300px] grow ${errori.messaggio ? "errore" : ""}`}
            />
            {errori.messaggio && (
              <span className="mt-1 text-red-500/70">{errori.messaggio}</span>
            )}
          </div>

          {/* privacy */}
          <div className="flex mt-1.5 items-center">
            <input
              type="checkbox"
              name="policy"
              checked={form.policy}
              onChange={change}
              className="cursor-pointer mr-2"
            />
            <div className="opacity-70 font-extralight text-[14px]">
              <span>Ho letto e accetto la </span>
              <Link href={"/legal"} className="underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* bottone */}
        <button
          type="submit"
          disabled={!button}
          onClick={handleSend}
          className={`
            buttonPrimary py-3
            ${!button ? "opacity-40 cursor-not-allowed" : "opacity-100"}
          `}
        >
          Invia richiesta
        </button>
      </form>
    </>
  );
}
