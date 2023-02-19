function About() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block text-center border-yellow-600 py-8">
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 py-5">
            <h1 className="text-yellow-600 font-semibold text-3xl pb-2"> O nás </h1>
            <p className="text-lg">
                Ide o projekt, maturtitnú prácu založenú na Reacte a API od hygraphcms.<br />
                Projek má pomocť začínajúcim kuchárom s jednoduchými receptami. <br />
                Všetky recepty sú overené, každý z nich je jednoduchý na prípravu a za dostupnú cenu.<br />
                ENJOY :) 
            </p>
          <div className="relative overflow-hidden shadow-md pb-10 mb-6"></div>
          <footer>
            <p>© 2023 Šmakocinky</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default About;
