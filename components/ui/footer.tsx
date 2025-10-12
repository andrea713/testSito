import ContentSection from "../layout/contentsection"
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";




export default function Footer(){

  return(
    <section>
      <ContentSection>
        <div className=" text-center md:flex justify-between">

          <div className=" flex flex-col gap-3 mb-10">

            <span className="text-5xl font-semibold">Studio Adorante</span>

            <ul className=" flex gap-3 text-xl justify-center md:justify-start">
              <li className=" flex"><a href="/"><FaSquareFacebook/></a></li>
              <li className=" flex"><a href="/"><IoLogoInstagram/></a></li>
              <li className=" flex"><a href=""><FaXTwitter/></a></li>
              <li className=" flex"><a href=""><IoLogoLinkedin/></a></li>
            </ul>

          </div>

          <div className=" flex-col gap-5 flex-wrap flex md:flex-row">

            <ul className=" font-semibold">Contattaci
              <div className=" opacity-70 font-light">
                <li>Email: Ing.gadorante@gmail.com</li>
                <li>Pec: giselda.adorante@ingpec.eu</li>
                <li>Fax: </li>
              </div>
            </ul>

          </div>

        </div>
      </ContentSection>
      <div className=" relative border-t-2/3 max-w-[1400px] m-auto px-6 py-3 md:px-12">
        <ul className=" flex-wrap justify-center flex gap-2 text-xs opacity-70 font-extralight">
          <li>Studio Adorante - studio di ingegneria </li>
          <li>Sede legale via S. Brigida, 3, 66036 Orsogna CH, Italia</li>
          <li>P. IVA 02835730694</li>
        </ul>
      </div>
    </section>
  )
}


