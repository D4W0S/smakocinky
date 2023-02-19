import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-yellow-600 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <div className="object-cover h-10 w-60">
              <img
                src="https://i.ibb.co/G2gqq36/logo-smakocinky.png"
                alt="Šmakocinky"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <Link key="home" href={`/contact`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              Kontakt
            </span>
          </Link>
          <Link key="home" href={`/about`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              O nás
            </span>
          </Link>
          <Link key="home" href={`/`}>
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              Domov
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
