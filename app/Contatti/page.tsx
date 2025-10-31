import FadeInText from "@/components/FadeInText";
import ContentSection from "@/components/layout/contentsection";
import Preventivo from "@/components/ui/preventivo";
import { SlEnergy } from "react-icons/sl";


export default function Contatti(){
      return(
            <>
            <section className="  bg-white/40 dark:bg-white/1">
                  <ContentSection>
                        <div className="flex flex-col gap-12 md:flex-row xl:gap-36">

                              <div className="max-w-xl mt-6">

                                    <FadeInText>
                                          <div>
                                                <p className=" text-lg">Siamo qui per aiutarti</p>
                                                <h1 className="text-4xl font-extralight mb-4 "><span className=" font-semibold">Discuss</span> your Chemical Solution Needs</h1>
                                                <p className=" mb-8">Are you looking for top-quality chemical solution tailored to yuor needs? rpach out to us</p>
                                          </div>
                                    </FadeInText>

                                    <ul className=" flex gap-4 flex-col">
                                          <li>
                                                <FadeInText delayMs={600}>
                                                      <div className=" flex">
                                                            <SlEnergy/>

                                                            <div className=" flex flex-col">
                                                                  <span className=" opacity-70">E-mail</span>
                                                                  <span>Ing.gadorante@gmail.com</span>
                                                            </div>
                                                      </div>
                                                </FadeInText>
                                          </li>
                                          
                                          <li>
                                                <FadeInText delayMs={1200}>
                                                      <div className=" flex">
                                                            <SlEnergy/>

                                                            <div className=" flex flex-col">
                                                                  <span className=" opacity-70">Vieni a trovarci</span>
                                                                  <span>via S. Brigida, 3, 66036 Orsogna CH</span>
                                                            </div>
                                                      </div>
                                                </FadeInText>
                                          </li>

                                    </ul> 

                              </div>
                              <FadeInText className="w-full flex justify-center md:justify-end">
                                    <Preventivo/>
                              </FadeInText>
                        </div>
                  </ContentSection>
            </section>

            <section>
                  <ContentSection>
                        <div className=" flex flex-col items-end">
                                      
                              <FadeInText>
            
                                    <div className="max-w-2xl flex flex-col items-end text-right">
                                          <h2  className=" mb-6">Vieni a trovarci</h2>
                                          <p className=" max-w-xl">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Numquam accusantium explicabo ad saepe ipsa sed dolorem
                                                deserunt, tempore quaerat! Delectus non dolore laudantium
                                                necessitatibus quo aut, explicabo tempore iste tenetur?
                                          </p>
                                    </div>
            
                              </FadeInText>
                        </div>
                  </ContentSection>

                  <h2>prenota un appuntamento nome cognome email</h2>
                  <h2>richiedi un preventivo nome cognome email messaggio</h2>
                  <h2>contattaci email pec ecc</h2>
                  <h2>vieni a trovarci</h2>
                  <h2>disponibilità orari</h2>
                  
            </section>
            </>
      )
}