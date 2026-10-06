import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[140px] md:pt-[170px]"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-24 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-32">
        
        {/* Content */}
        <div>
          {/* Availability */}
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="font-mono-custom text-[11px] tracking-[0.12em] text-[#6B6B6B]">
              AVAILABLE FOR SELECTED PROJECTS
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[720px] text-[46px] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#171717] sm:text-[56px] md:text-[68px] lg:text-[76px]">
            I build{" "}
            <span className="text-[#6D5DFB]">
              modern digital experiences.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[570px] text-base leading-7 text-[#6B6B6B] md:text-lg">
            I'm Anusree — a MERN Stack Developer, Web Development Trainer
            and Freelancer focused on creating clean, functional and
            user-friendly web experiences.
          </p>

          {/* Role tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "MERN Stack",
              "Web Development",
              "Training",
              "Freelancing",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#E7E5E4] bg-white px-3 py-1.5 text-xs font-medium text-[#6B6B6B]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View My Work
              <span>→</span>
            </Button>

            <Button href="#contact" variant="secondary">
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="relative mx-auto w-full max-w-[430px]">
          
          {/* Decorative background */}
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#EEECFF] blur-2xl" />
          
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#EEECFF] blur-3xl" />

          {/* Main card */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#E7E5E4] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            
            {/* Replace this with your own photo */}
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[18px] bg-[#EEECFF]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-[#6D5DFB]">
                  A
                </div>

                <p className="font-semibold text-[#171717]">
                  Anusree
                </p>

                <p className="mt-1 text-sm text-[#6B6B6B]">
                  Developer • Trainer • Freelancer
                </p>
              </div>
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute -left-5 top-12 hidden rounded-xl border border-[#E7E5E4] bg-white px-4 py-3 shadow-lg sm:block">
            <p className="font-mono-custom text-[10px] text-[#6B6B6B]">
              STACK
            </p>
            <p className="mt-1 text-sm font-bold">
              MERN
            </p>
          </div>

          <div className="absolute -bottom-4 -right-4 rounded-xl border border-[#E7E5E4] bg-white px-4 py-3 shadow-lg">
            <p className="font-mono-custom text-[10px] text-[#6B6B6B]">
              CURRENTLY
            </p>
            <p className="mt-1 text-sm font-bold">
              Building & Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;