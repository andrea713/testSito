import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-white/40 dark:bg-white/1">
      
      <h1 className="text-2xl opacity-30 mb-7">404 | Pagina non trovata</h1>
      <Link href={"/"} className=' button border-2 border-white/30' >Torna alla Home</Link>
    </div>
  );
}

