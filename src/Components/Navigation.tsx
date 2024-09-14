import { Button } from "./Button";

export const Navigation = () => {
  return (
    <nav className="flex h-20 w-full items-center justify-between gap-4 px-3 transition-all md:px-32">
      <img
        src="images/logo.png"
        alt="logo"
        className="w-20 sm:w-28 md:w-auto"
      />
      <div className="flex items-center gap-6 text-center">
        <a href="#gallery" className="link-style">
          Galeria zdjęć
        </a>
        <a href="#faq" className="link-style">
          FaQ
        </a>
      </div>
      <Button filled>Zadzwoń do nas</Button>
    </nav>
  );
};
