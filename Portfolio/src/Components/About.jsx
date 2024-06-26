import img from "../assets/musi.png";

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-right"
        src={img}
        width={290}
        height={290}
        className=" rounded-full border-2 p-1 border-fuchsia-50 img_glow"
        alt=""
      />
      <div className="h-full lg:py-40 flex flex-col just lg:items-start items-center text-white">
        <h1
          date-aos="fade-right"
          className=" text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
        >
          About Me
        </h1>
        <p data-aos="fade-left">
        Iam a proficient MERN stack developer with a passion for crafting robust and scalable web applications.With extensive experience in each component of the MERN stack.I brings a unique blend of skills to any project.
        </p>
        <div className="flext mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
