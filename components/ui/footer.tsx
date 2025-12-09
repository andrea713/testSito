import ContentSection from "../layout/contentsection";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { infoStudio } from "@/app/info";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <ContentSection>
        <div className=" text-center md:flex justify-between">
          <div className=" flex flex-col gap-3 mb-10">
            <span className="text-5xl font-semibold">Studio Adorante</span>

            <ul className=" flex gap-3 text-xl justify-center md:justify-start">
              <li className=" flex">
                <a href={infoStudio.facebook}>
                  <FaSquareFacebook />
                </a>
              </li>
              <li className=" flex">
                <a href={infoStudio.instagramm}>
                  <IoLogoInstagram />
                </a>
              </li>
              <li className=" flex">
                <a href={infoStudio.twitter}>
                  <FaXTwitter />
                </a>
              </li>
              <li className=" flex">
                <a href={infoStudio.linkedIn}>
                  <IoLogoLinkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className=" flex-col gap-5 flex-wrap flex md:flex-row">
            <ul className=" font-semibold">
              Contattaci
              <div className=" opacity-70 font-light">
                <li>Email: {infoStudio.email}</li>
                <li>Pec: {infoStudio.pec}</li>
              </div>
            </ul>
          </div>
        </div>
      </ContentSection>
      <div className=" relative border-t-2/3 max-w-[1400px] m-auto px-6 py-3 md:px-12">
        <ul className=" flex-wrap justify-center flex gap-2 text-xs opacity-70 font-extralight">
          <li>Studio Adorante - studio di ingegneria </li>
          <li>Sede legale {infoStudio.sede}, Italia</li>
          <li>P. IVA {infoStudio.pIva}</li>
          <li>
            <Link href={"/legal"}>Privacy policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
