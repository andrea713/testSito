import BgSection from "@/components/layout/bgsection";
import ContentSection from "@/components/layout/contentsection";
import Carousel from "@/components/ui/carousel";
import Image from "next/image";
import Logo from "@/public/icons/LogoStudioAdorante.svg";
import Link from "next/link";
import SectionPreventivo from "@/components/ui/input";

export default function Home() {
  
  return (
    <div>
      <section className="h-lvh">
        <div className=" -z-50 h-full ">
          <BgSection>
            {/* <Carousel /> */}
            <div className=" absolute top-0 z-40 bg-black/10 w-full h-full"></div>
            <Image
            src={'/HERO.png'}
            alt="Esempio"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="h-lvh"
            ></Image>
          </BgSection>

          <ContentSection>
            <div className=" text-white">
              <div className=" max-w-2xl mt-10">

                <h1 className=" text-2xl opacity-50 font-medium">Studio di ingegneria</h1>
                <h2 className=" mb-6 text-5xl">Progettiamo il futuro, un dettaglio alla volta.</h2>
                
                <Link href={"/Contatti"} className=' py-2 px-4 rounded-2xl border-2 border-white/30 material'>
                  <span className=''>Parlaci del tuo progetto</span>
                </Link>
                
              </div>
            </div>
          </ContentSection>
        </div>
      </section>

      <section>
        <div className=" relative -z-50 ">
          <ContentSection>
            <div>
              <div className=" max-w-2xl  ">
                <h2 className=" mb-6">Chi Siamo?</h2>
                <p className=" max-w-xl">
                  Lo “Studio Tecnico Associato ALL INGEGNERIA”, già “Studio
                  Tecnico Prof. Ing. Rodolfo Antonucci – Dott. Ing. Stefano
                  Leoni & Associati”, nasce come studio di strutturisti in zona
                  sismica. Sin dalle origini si mostra chiaro il carattere
                  “sociale” cui ambisce la compagine che, sulla base di
                  un’esperienza trentennale nel campo dell’ingegneria sismica,
                  si colloca al servizio del Privato e della Pubblica
                  Amministrazione. L’obiettivo dello Studio è quello di porsi
                  come referente tecnico a favore della tutela della pubblica
                  sicurezza in caso di sisma, sia nelle nuove costruzioni sia
                  nell’adeguamento dell’esistente, in particolar modo del
                  patrimonio edilizio storico del nostro Paese e degli edifici
                  considerati strategici per le funzioni cui sono preposti
                  (ospedali, scuole, caserme,…).
                </p>
              </div>
            </div>
          </ContentSection>
        </div>
      </section>

      <section>
          <ContentSection>
            <div className=" text-right flex flex-col items-end">
              <div className=" max-w-2xl flex flex-col items-end">
                <h2  className=" mb-6">Servizi</h2>
                <p className=" max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam accusantium explicabo ad saepe ipsa sed dolorem
                  deserunt, tempore quaerat! Delectus non dolore laudantium
                  necessitatibus quo aut, explicabo tempore iste tenetur?
                </p>
              </div>
            </div>
          </ContentSection>
      </section>

      <section className=" bg-white/40 dark:bg-white/1">
        <ContentSection>
          <div>
            <div className=" max-w-2xl">
              <h2  className=" mb-6">Progetti</h2>
              <p className=" max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam accusantium explicabo ad saepe ipsa sed dolorem
                deserunt, tempore quaerat! Delectus non dolore laudantium
                necessitatibus quo aut, explicabo tempore iste tenetur?
              </p>
            </div>
          </div>
        </ContentSection>
      </section>

      <section className=" bg-white/40 dark:bg-white/1">
        <ContentSection>
            <div className=" max-w-2xl flex flex-col items-end">
              <h2  className=" mb-6">I nostri orari</h2>
              <p className=" max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam accusantium explicabo ad saepe ipsa sed dolorem
                deserunt, tempore quaerat! Delectus non dolore laudantium
                necessitatibus quo aut, explicabo tempore iste tenetur?
              </p>
            </div>
        </ContentSection>
      </section>
    </div>
  );
}
