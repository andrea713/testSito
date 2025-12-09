import FadeInText from "@/components/FadeInText";
import ContentSection from "@/components/layout/contentsection";
import Prenotazione from "@/components/ui/prenotazione";
import Preventivo from "@/components/ui/preventivo";
import { infoStudio } from "@/app/info";
import {
  FaClock,
  FaEnvelope,
  FaEnvelopeCircleCheck,
  FaLocationDot,
} from "react-icons/fa6";
import Card from "@/components/ui/card";

export default function Contatti() {
  return (
    <>
      <section className=" bg-foreground">
        <ContentSection>
          <span className=" text-green-500/50">risposta entro 24h</span>
          <div className="flex flex-col gap-12 md:flex-row xl:gap-36">
            <div className="mt-6">
              <FadeInText>
                <div className=" mb-8">
                  <p className=" text-lg mb-2">Raccontaci la tua idea</p>
                  <h1 className="text-4xl font-extralight mb-8">
                    <span className=" font-semibold">Parliamo</span> delle tue
                    esigenze progettuali direttamente{" "}
                    <span className=" font-semibold">online</span>
                  </h1>
                  <p>
                    Descrivici la tua idea, valuteremo insieme le migliori
                    soluzioni progettuali per le tue necessità, tramite una
                    consulenza preliminare gratuita, direttamente online.
                  </p>
                </div>
              </FadeInText>

              <ul className=" flex gap-4 flex-col">
                <p>Puoi contattarci anche tramite:</p>
                <li>
                  <FadeInText delayMs={600}>
                    <div className=" flex items-center">
                      <FaEnvelope className=" text-4xl mr-4" />

                      <div className=" flex flex-col">
                        <span className=" font-bold">E-mail</span>
                        <span className=" opacity-70">{infoStudio.email}</span>
                      </div>
                    </div>
                  </FadeInText>
                </li>

                <li>
                  <FadeInText delayMs={1200}>
                    <div className=" flex items-center">
                      <FaEnvelopeCircleCheck className=" text-4xl mr-4" />

                      <div className=" flex flex-col">
                        <span className=" font-bold">PEC</span>
                        <span className=" opacity-70">{infoStudio.pec}</span>
                      </div>
                    </div>
                  </FadeInText>
                </li>
              </ul>
            </div>
            <FadeInText className="w-full flex items-center justify-center md:justify-end">
              <Preventivo />
            </FadeInText>
          </div>
        </ContentSection>
      </section>

      <section>
        <ContentSection>
          <div className="flex flex-col gap-12 md:flex-row-reverse xl:gap-36">
            <div className="max-w-xl mt-6 text-right">
              <FadeInText>
                <div>
                  <p className=" text-lg">Puoi torvarci qui</p>
                  <h2 className="text-4xl font-extralight mb-4 ">
                    <span className=" font-semibold">Prenota</span> un
                    appuntamento per una consulenza in sede
                  </h2>
                  <p className=" mb-8">
                    Il nostro studio è a tua disposizione per incontri e
                    consulenze tecniche personalizzate. Prenota un appuntamento:
                    sarà l’occasione per approfondire le tue idee e valutare
                    insieme la strada migliore per realizzarle.
                  </p>
                </div>
              </FadeInText>

              <ul className=" flex gap-4 flex-col text-start">
                <li>
                  <FadeInText delayMs={600}>
                    <div className=" flex items-center">
                      <FaClock className=" text-3xl mr-4" />

                      <div className=" flex flex-col">
                        <span className=" font-bold">Orari</span>
                        <span className=" opacity-70">{infoStudio.orari}</span>
                      </div>
                    </div>
                  </FadeInText>
                </li>

                <li>
                  <FadeInText delayMs={1200}>
                    <div className=" flex items-center">
                      <FaLocationDot className=" text-4xl mr-4" />

                      <div className=" flex flex-col">
                        <span className=" font-bold">Sede</span>
                        <span className=" opacity-70">{infoStudio.sede}</span>
                      </div>
                    </div>
                  </FadeInText>
                </li>
              </ul>
            </div>
            <FadeInText className="w-full flex items-center justify-center md:justify-end">
              <Prenotazione />
            </FadeInText>
          </div>
        </ContentSection>
      </section>
    </>
  );
}
