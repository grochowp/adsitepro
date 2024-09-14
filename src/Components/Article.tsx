import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const Article = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <article className="flex flex-col gap-4">
      <h1 className="font-bebasNeue text-2xl">
        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
        commodo.
      </h1>
      <p
        className={`font-robotoCondensed text-[14px] font-light ${expanded ? "" : "line-clamp-2"}`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur magna nisl, non bibendum massa lacinia quis. Integer sed
        pulvinar nisi. In nec iaculis libero. Aliquam suscipit vel libero
        pretium vulputate. Suspendisse ac justo non magna scelerisque fermentum
        id in dolor. Donec fringilla eros a vulputate egestas. Morbi
        pellentesque lacus vel sapien venenatis, commodo consectetur diam
        suscipit. Etiam sagittis sit amet est in porttitor. Proin egestas sapien
        vitae libero iaculis tincidunt.
      </p>
      <div
        onClick={toggleExpand}
        className="mt-4 flex max-w-max cursor-pointer items-center gap-1 border-b-[1px] border-white font-robotoCondensed text-[14px]"
      >
        <span>{expanded ? "Zwiń" : "Rozwiń"}</span>
        {expanded ? <GoArrowUp /> : <GoArrowDown />}
      </div>
    </article>
  );
};

export default Article;
