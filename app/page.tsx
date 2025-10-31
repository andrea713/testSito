import BgSection from "@/components/layout/bgsection";
import ContentSection from "@/components/layout/contentsection";
import Link from "next/link";
import SectionPreventivo from "@/components/ui/input";
import FadeInText from "@/components/FadeInText";
import { SlEnergy } from "react-icons/sl";
import Input from "@/components/ui/input";
import Preventivo from "@/components/ui/preventivo";



export default function Home() {
  
  return (
    <div>
      <section className="h-lvh ">
        <div className=" h-full ">
          <BgSection>
            <div className=" absolute top-0 z-40 bg-black/40 w-full h-full"></div>

            <video
            src="/Timeline 1.mov"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline/>
            
          </BgSection>

          <ContentSection>
            <div className=" text-white h-fit">
              <div className=" max-w-2xl">

                <FadeInText>
                  <h1 className=" text-2xl opacity-50 font-medium">Studio di ingegneria</h1>                
                </FadeInText>

                <div className=" mb-8 mt-2">
                  <FadeInText>
                    <h2 className="text-5xl">Progettiamo il futuro,
                        <FadeInText delayMs={1000}>
                        <span className="text-5xl font-semibold"> un</span>
                        </FadeInText>
                        
                        <FadeInText delayMs={2000}>
                          <span className="text-5xl font-semibold"> dettaglio</span>
                        </FadeInText>

                        <FadeInText delayMs={3000}>
                          <span className="text-5xl font-semibold"> alla volta.</span>
                        </FadeInText>
                    </h2>
                  </FadeInText>
                </div>

                <Link href={"/Contatti"} className='backdrop-blur-md z-10 py-2 px-4 rounded-2xl border-2 border-white/30 '>
                  <span className=''>Parlaci del tuo progetto</span>
                </Link>

                
              </div>
            </div>
          </ContentSection>
        </div>
      </section>

      <section className=" bg-white/40 dark:bg-white/1">
        <div className=" relative -z-50 ">
          <ContentSection>
            <div>
              <FadeInText>
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
              </FadeInText>
            </div>
          </ContentSection>
        </div>
      </section>

      <section>
          <ContentSection>
            <div className=" flex flex-col items-end ">
              
              <FadeInText>

                <div className="max-w-2xl flex flex-col items-end text-right">
                  <h2  className=" mb-6">Servizi</h2>
                  <p className=" max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam accusantium explicabo ad saepe ipsa sed dolorem
                    deserunt, tempore quaerat! Delectus non dolore laudantium
                    necessitatibus quo aut, explicabo tempore iste tenetur?
                  </p>
                </div>

              </FadeInText>

              <ul className=" flex mt-24 flex-col gap-4 max-w-xl">
                <li className=" flex ">
                  <SlEnergy className=" mr-2" size={100}/>
                  <span>PROGETTAZIONE E PIANIFICAZIONE <p className=" text-xs"> Sviluppo, Direzione dei Lavori, Stima, Gestione, Valutazione di impatto ambientale di opere edili e strutture, infrastrutture, territoriali e di trasporto, di opere per la difesa del suolo, di sistemi di impianti civili e per l'ambiente e il territorio.</p></span>
                </li>

                <li className=" flex ">
                  <SlEnergy className=" mr-2 " size={100}/>
                  <span>PROGETTAZIONE E PIANIFICAZIONE <p className=" text-xs"> Sviluppo, Direzione dei Lavori, Stima, Gestione, Valutazione di impatto ambientale di opere edili e strutture, infrastrutture, territoriali e di trasporto, di opere per la difesa del suolo, di sistemi di impianti civili e per l'ambiente e il territorio.</p></span>
                </li>

                <li className=" flex ">
                  <SlEnergy className=" mr-2 " size={100}/>
                  <span>PROGETTAZIONE E PIANIFICAZIONE <p className=" text-xs"> Sviluppo, Direzione dei Lavori, Stima, Gestione, Valutazione di impatto ambientale di opere edili e strutture, infrastrutture, territoriali e di trasporto, di opere per la difesa del suolo, di sistemi di impianti civili e per l'ambiente e il territorio.</p></span>
                </li>

                

                <li>SICUREZZA CANTIERI</li>
                <li>DIREZIONE LAVORI</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

            
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
              
              <Preventivo/>
            </div>
        </ContentSection>
      </section>
    </div>
  );
}
