import Article from "./Article";

export const SEO = () => {
  return (
    <section
      id="faq"
      className="flex flex-col gap-[4rem] bg-[#282828] px-4 py-20 text-[#f7f7f7] md:flex-row md:px-[128px]"
    >
      <Article />
      <Article />
    </section>
  );
};
