const Work = () => {
  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-black"
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
          className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors border border-gray-600 hover:border-gray-500"
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