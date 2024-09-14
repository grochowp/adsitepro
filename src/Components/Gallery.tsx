import { useState } from "react";

const cars: Array<string> = [
  "car-0.png",
  "car-1.png",
  "car-2.png",
  "car-3.png",
];
const van: Array<string> = [];

export const Gallery = ({ selectedType }: { selectedType: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesArray = selectedType === "van" ? van : cars;

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    const imageWidth =
      document.querySelector(".image-container")?.clientWidth || 0;
    document.querySelector(".scroll-container")?.scrollTo({
      left: imageWidth * index * 0.9,
      behavior: "smooth",
    });
  };

  const images = imagesArray.map((imageSrc, index) => (
    <img
      key={index}
      src={`images/${imageSrc}`}
      alt={`image-${index}`}
      className={`image-container h-auto w-auto max-w-[55%] cursor-pointer object-cover md:max-w-[45%]`}
      onClick={() => handleDotClick(index)}
    />
  ));

  if (!images.length)
    return (
      <div className="flex w-full justify-center py-10 font-bebasNeue text-[30px] text-[#000000] md:text-[40px]">
        Aktualnie niedostępne
      </div>
    );

  return (
    <div className="p-6 transition-all md:px-24 md:py-10">
      <div className="scroll-container flex gap-5 overflow-x-auto scroll-smooth whitespace-nowrap md:gap-14">
        {images}
      </div>

      <div className="my-4 flex justify-center sm:my-8">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
