import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container mx-auto px-10 mb-8 flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2 inline-block text-center border-yellow-600 py-8 lg:pr-4">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 py-5">
            <h1 className="text-yellow-600 font-semibold text-3xl pb-2">
              Kontakt
            </h1>
            <p className="text-lg">
              <p>Pokiaľ máte zaujímavý recept neváhajte nám ho poslať:</p>
              <a
                href="mailto: zdenek.kovac@spsjm.eu"
                className="text-yellow-900"
              >
                zdenek.kovac@spsjm.eu
              </a>
              <br />
              <a href="tel: +421949425225" className="text-yellow-900">
                +421 949 425 225
              </a>
              <br />
              J. M. Hurbana 6, 974 01 Banská Bystrica
            </p>
            <div className="mt-5 flex justify-center items-center space-x-4">
              <a
                href="https://www.facebook.com/smakocinky/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-yellow-600 hover:text-yellow-800 w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/smakocinky/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-yellow-600 hover:text-yellow-800 w-6 h-6"
                />
              </a>
              <a
                href="https://www.tiktok.com/@smakocinky"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-yellow-600 hover:text-yellow-800 w-6 h-6"
                />
              </a>
            </div>
            <div className="relative overflow-hidden shadow-md pb-10 mb-6"></div>
            <footer>
              <p>© 2023 Šmakocinky</p>
            </footer>
          </div>
        </div>
        <div className="w-full lg:w-1/2 inline-block text-center py-8 lg:pl-4">
          <div className="flex justify-center">
            <iframe
              className="border-4 border-yellow-600 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.4140273101325!2d19.13387941575445!3d48.735787417285366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153df6a8c84599%3A0x29af1b5aff6be55d!2zU3RyZWRuw6EgcHJpZW15c2VsbsOhIMWha29sYSBKb3plZmEgTXVyZ2HFoWE!5e0!3m2!1ssk!2ssk!4v1673992871244!5m2!1ssk!2ssk"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
