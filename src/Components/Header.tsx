import { useState } from "react";
import { Gallery } from "./Gallery";

export const Headers = () => {
  const [selectedType, setSelectedType] = useState<string>("cars");

  return (
    <>
      <div
        id="gallery"
        className="flex w-full flex-col justify-start pl-6 md:pl-24"
      >
        <h1 className="font-robotoCondensed text-[18px] text-[#0147FF] md:text-[21.5px]">
          Prezentacja firmy
        </h1>
        <h2 className="font-bebasNeue text-[30px] md:text-[40px]">
          Zobacz naszą galerię zdjęć
        </h2>
        <div className="flex gap-5 pt-5 font-robotoFlex text-[12px] md:gap-10 md:text-[15px]">
          <span
            className={`${selectedType === "cars" ? "selected" : "text-[#000000]"} cursor-pointer`}
            onClick={() => {
              setSelectedType("cars");
            }}
          >
            Samochody osobowe
          </span>

          <span
            className={`${selectedType === "van" ? "selected" : "text-[#000000]"} cursor-pointer`}
            onClick={() => {
              setSelectedType("van");
            }}
          >
            Samochody dostawcze
          </span>
        </div>
      </div>
      <Gallery selectedType={selectedType} />
    </>
  );
};
