import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="relative z-20 flex h-[600px] w-full flex-col justify-start pl-6 md:h-[825px] md:pl-24">
      <h1 className="mt-16 w-[47%] font-bebasNeue text-5xl md:text-[76px] md:leading-[5.5rem]">
        Sprzedajemy samochody z Europy
      </h1>
      <h2 className="z-20 w-[70%] py-10 font-robotoCondensed text-base sm:w-[50%] md:w-[20%] md:min-w-[300px]">
        Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
      </h2>
      <div className="z-20 flex gap-5 md:gap-10">
        <Button filled>Zobacz zdjęcia</Button>
        <Button filled={false}>Zadzwoń do nas</Button>
      </div>
      <img
        src="/images/Hero.png"
        className="absolute bottom-[5rem] right-[-1px] z-10 w-[75%] min-w-[300px] md:bottom-[8rem]"
        alt="Hero"
      />
    </section>
  );
};
