import ContentSection from "@/components/layout/contentsection";

export default function Policy() {
  return (
    <>
      <section>
        <ContentSection>
          <div className="mb-24">
            <span className=" text-2xl opacity-50 font-medium">
              Studio Adorante
            </span>
            <h1>Privacy policy</h1>
          </div>

          <ul className=" flex flex-col gap-12">
            <li>
              <h2 className=" mb-6">Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento dei dati è: Studio Adorante Email:
                ing.gadorante@gmail.com
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Tipologie di dati raccolti</h2>
              <p>
                Attraverso il form di richiesta preventivo vengono raccolti i
                seguenti dati personali:
              </p>

                <ul className=" opacity-70 list-disc list-inside mt-3 ">
                  <li>Nome</li>
                  <li>Email</li>
                  <li>Messaggio inserito nel form</li>
                  <li>
                    Eventuali dati tecnici inviati automaticamente dal server
                    (es. indirizzo IP, data e ora della richiesta)
                  </li>
                </ul>

            </li>

            <li>
              <h2 className=" mb-6">Finalità del trattamento</h2>
              <p>
                I dati forniti dall’utente vengono utilizzati esclusivamente
                per:
              </p>

                <ul className="opacity-70 list-disc list-inside mt-3 ">
                  <li>rispondere alla richiesta di preventivo;</li>
                  <li>
                    rispondere alla richiesta di prenotazione appuntamento;
                  </li>
                  <li>
                    contattare l’utente per informazioni inerenti ai servizi
                    richiesti;
                  </li>
                  <li>
                    garantire la sicurezza del sito (es. sistemi anti-bot).
                  </li>
                </ul>

              <p className=" mt-3">
                I dati forniti dall’utente vengono utilizzati esclusivamente
                per:
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Base giuridica del trattamento</h2>
              <p>La base giuridica è:</p>


                <ul className="opacity-70 list-disc list-inside mt-3 ">
                  <li>
                    esecuzione di misure precontrattuali (art. 6.1.b GDPR),
                    poiché l’utente richiede un preventivo o informazioni.
                  </li>
                </ul>


              <p className=" mt-3">
                Per i dati tecnici raccolti automaticamente, la base giuridica è
                il legittimo interesse alla sicurezza del sito (art. 6.1.f
                GDPR).
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Modalità di trattamento e sicurezza</h2>
              <p>
                I dati vengono trattati con strumenti informatici e protetti da
                misure di sicurezza adeguate a prevenire:
              </p>


                <ul className="opacity-70 list-disc list-inside mt-3 ">
                  <li>accessi non autorizzati;</li>
                  <li>perdita o diffusione non autorizzata;</li>
                  <li>utilizzo improprio.</li>
                </ul>

            </li>

            <li>
              <h2 className=" mb-6">Luogo del trattamento</h2>
              <p>
                Il sito è ospitato su Vercel, i cui server possono trovarsi in
                paesi UE o extra-UE. Vercel è conforme al GDPR e utilizza
                clausole contrattuali standard per il trasferimento dati.
              </p>

              <p className=" mt-3">
                Le richieste del form vengono consegnate direttamente all’email
                ing.gadorante@gmail.com.
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Tempo di conservazione dei dati</h2>
              <p>I dati vengono conservati per il tempo necessario a:</p>


                <ul className="opacity-70 list-disc list-inside mt-3 ">
                  <li>rispondere alla richiesta dell’utente;</li>
                  <li>adempiere ad obblighi amministrativi/legali.</li>
                </ul>


              <p className=" mt-3">
                Generalmente la conservazione non supera 12 mesi dalla ricezione
                della richiesta, salvo necessità legali o contrattuali.
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Conferimento dei dati</h2>
              <p>
                Il conferimento dei dati è facoltativo, ma necessario per poter
                rispondere alla richiesta di preventivo.
              </p>

              <p className=" mt-3">
                In caso di mancato conferimento, non sarà possibile fornire il
                servizio richiesto.
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Comunicazione e diffusione dei dati</h2>
              <p>I dati non vengono ceduti o diffusi a terzi, salvo:</p>


                <ul className="opacity-70 list-disc list-inside mt-3 ">
                  <li>fornitori tecnici (hosting, email provider);</li>
                  <li>obblighi di legge.</li>
                </ul>

            </li>

            <li>
              <h2 className=" mb-6">Diritti dell’utente (artt. 15–22 GDPR)</h2>
              <p>L’utente può in qualsiasi momento:</p>

ì
                <ul className="opacity-70 list-disc list-inside mt-3 ">
                  <li>ottenere la conferma dell’esistenza dei propri dati;</li>
                  <li>richiedere l’accesso, la rettifica, la cancellazione;</li>
                  <li>limitare il trattamento;</li>
                  <li>opporsi al trattamento;</li>
                  <li>richiedere la portabilità dei dati.</li>
                </ul>
ì

              <p className=" mt-3">
                Le richieste devono essere inviate a: ing.gadorante@gmail.com
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Cookie e strumenti di tracciamento</h2>
              <p>
                Il sito non utilizza cookie di profilazione o tracciamento. Sono
                utilizzati solo cookie tecnici e sistemi anti-bot indispensabili
                per il funzionamento del sito e non richiedono il consenso
                dell’utente.
              </p>
            </li>

            <li>
              <h2 className=" mb-6">Modifiche alla presente informativa</h2>
              <p>
                La presente informativa può essere soggetta a modifiche. La
                versione aggiornata sarà sempre disponibile su questa pagina.
              </p>
            </li>
          </ul>
        </ContentSection>
      </section>
    </>
  );
}
