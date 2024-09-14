export const Footer = () => {
  return (
    <footer className="flex h-[72px] w-full items-center justify-between border-t-[1px] border-white bg-[#282828] px-3 transition-all md:px-32">
      <span className="font-robotoCondensed text-base text-white">
        Cars Spot
      </span>
      <a
        href="/"
        className="font-robotoCondensed text-base font-light text-white underline"
      >
        Polityka prywatności
      </a>
    </footer>
  );
};
