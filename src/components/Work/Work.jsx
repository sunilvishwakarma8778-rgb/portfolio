const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="text-center flex flex-col items-center">
        
        <h2 className="text-4xl font-bold text-white mb-8">
          FIGMA PROJECTS
        </h2>

        {/* Figma Image Button */}
        <a
          href="https://www.figma.com/design/ZIrDRRlxzuSusFMJ9UamKi/portfolio---project?m=auto&t=NgaGHzpHGXuTmXTa-6"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 p-6 rounded-full hover:scale-110 transition-transform shadow-2xl"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma"
            className="w-20 h-20 object-contain"
          />
        </a>

      </div>
    </section>
  );
};

export default Work;