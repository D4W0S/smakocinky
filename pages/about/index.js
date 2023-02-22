import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>O nás</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block text-center border-yellow-600 py-8">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 py-5">
            <h1 className="text-yellow-600 font-semibold text-3xl pb-2">
              {" "}
              O nás{" "}
            </h1>
            <p className="text-lg p-5">
              Tešíme sa že ste navštívili náš blog Šmakocinky.sk ! Sme váš
              sprievodca svetom receptov a online ukladania receptov.
              <br />
              Máte radi varenie a chcete sa inšpirovať novými receptami, ktoré
              nájdete na jednom mieste? Sme tu pre vás!
              <br />
              Ste študenti, ktorích už prestalo baviť jesť sáčkové polievky?
              Naša stránka Vám ponúka veľa cenovo dostupných, jednoduchých a
              hlavne rýchlich jedál, ktoré nikdy nesklamú.
              <br />
              Okrem zdieľania receptov, sme sa zamerali aj na zlepšenie vašich
              kuchárskych zručností. Na našej stránke nájdete množstvo
              užitočných tipov a trikov pre varenie, ktoré vám pomôžu stať sa
              lepším kuchárom.
              <br />
              Táto webová stránka bola vytvorená ako súčasť maturitnej práce,
              kde sme sa zameriavali na základy react.js. Naša práca nás
              naučila, ako vytvárať moderné webové aplikácie s interaktívnym
              používateľským rozhraním. Sme hrdí na to, že sme mohli vytvoriť
              túto stránku a veríme, že sa vám bude páčiť!
              <br />
            </p>
            <div className="relative overflow-hidden shadow-md pb-10 mb-6"></div>
            <footer>
              <p>© 2023 Šmakocinky</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
