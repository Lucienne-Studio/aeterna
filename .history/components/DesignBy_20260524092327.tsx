/*const DesignBy = () => {
  return (
    <div className="text-center text-sm text-neutral-500 bg-neutral-100 nova
    px-4 md:px-8 py-10 uppercase">
      &copy; {new Date().getFullYear()}  Concept reimagined for portfolio purposes © Richartistique Le Brassus. Media & Original design ©  Cartier & respective owners
    </div>
  )
}

export default DesignBy*/
const DesignBy = () => {
  return (
    <section
      className="
        w-full bg-neutral-50
        border-t border-neutral-200
      "
    >
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 md:px-10
          py-8 md:py-10
        "
      >
        <p
          className="
            text-[10px] md:text-[11px]
            leading-relaxed
            tracking-[0.16em]
            uppercase
            text-neutral-400
            font-light
            max-w-5xl
          "
        >
          © {new Date().getFullYear()} Auremont. Concept reimagined for
          portfolio purposes by Lucienne Studio. Original
          design © Lucienne Studio.
        </p>
      </div>
    </section>
  );
};

export default DesignBy;