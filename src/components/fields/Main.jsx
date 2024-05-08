import React, { useState } from "react";
import successText from "../../assets/images/successText.png";
import Image from "../../assets/images/image.png";
export default function Main() {
  const [dotIndex, setDotIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "The sunsets painted the sky in hues of orange and pink, casting a warm glow over the sleepy town.",
    "Lost in the labyrinth of thoughts, she searched for the elusive thread of clarity amidst the chaos of her mind.",
  ];
  const handleExploreClick = () => {
    setDotIndex((prevIndex) => (prevIndex + 1) % texts.length);

    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div>
      <div className="w-full h-full mt-10 ">
        <div className="w-full    ">
          <div className="w-full h-44 left-[364px] flex flex-col justify-center items-center gap-4 ">
            <img
              src={successText}
              className="md:w-[186px] md:h-20 w-[150px] h-10"
            />
            <div className=" wrap font-manrope font-semibold lg:text-5xl text-2xl sm:w-[70%] lg:w-[40%] leading-11 tracking-wider text-center lg:my-5 sm:my-3 flex items-center justify-center flex-col">
              Every success journey we’ve encountered.
            </div>
          </div>
          <div>
            <div className="flex md:flex-1 mt-20 md:flex-row flex-col m-5">
              <div className="flex items-center  justify-center p-5">
                <div className="flex items-center justify-center">
                  <img
                    src={Image}
                    className="lg:w-3/5 w-4/5 h-5/6 rounded-3xl"
                  ></img>
                  <div className="md:w-72 md:h-60 w-30 h-46   p-5 top-[630px] left-[200px]  lg:top-[880px] lg:left-[630px] absolute bg-green-950 rounded-3xl shadow border border-neutral-700 flex-col justify-start items-start gap-5 inline-flex">
                    <div className="justify-start items-baseline sm: gap-1 md:gap-2.5 inline-flex">
                      <div className="text-white  text-2xl lg:text-6xl font-medium font-['Switzer'] leading-10">
                        $0.5
                      </div>
                      <div className="text-stone-400 text-1xl md:text-2xl font-medium font-manrope uppercase leading-loose tracking-tight">
                        million
                      </div>
                    </div>
                    <div className="lg:w-56 w-30 text-stone-300 text-lg font-medium font-manrope leading-normal">
                      Reduced client expenses by saving on hiring and employee
                      costs.
                    </div>
                  </div>
                </div>
                <div>
                  {/* new  */}
                  <div className="md:w-64 md:h-60 w-32  h-30 md:p-7 p-2  left-0 top-[500px] md:left-[80px] md:top-[554px] absolute bg-white rounded-3xl shadow flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-zinc-900 text-xl md:text-6xl font-medium font-['Switzer'] leading-10">
                      40%
                    </div>
                    <div className="md:w-52 sm:w-15 text-zinc-500 md:text-lg text-sm font-medium font-manrope leading-normal">
                      Achieved reduction in project execution time by optimising
                      team availability
                    </div>
                  </div>
                  {/* new  */}
                </div>
                <div>
                  <div className="md:w-60  w-50 md:h-20  h-15 p-2 md:p-5 md:left-[106.19px] left-0 top-[700px] md:top-[950.71px] absolute bg-white rounded-full shadow backdrop-blur-2xl justify-start items-center gap-3.5 inline-flex">
                    <div className="w-12 h-12 relative">
                      <div className="w-12 h-12 left-0 top-0 absolute opacity-40 bg-neutral-200 rounded-full" />
                      <div className="w-8 h-8 pl-0.5 pr-1 pt-1 pb-0.5 left-[10px] top-[10px] absolute justify-center items-center inline-flex" />
                    </div>
                    <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                      <div className="text-zinc-900 sm:text-xl lg:text-2xl font-['Switzer'] font-bold font-manrope uppercase">
                        10 days
                      </div>
                      <div className="text-zinc-500 text-base font-medium font-manrope leading-tight">
                        Staff Deployment
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between flex-col lg:mt-0 mt-20">
                <div className="flex items-start flex-col justify-center">
                  <div
                    id="text-container"
                    className="w-96 mt-20 text-zinc-900 text-4xl font-semibold font-manrope leading-10"
                  >
                    {texts[textIndex]}
                  </div>
                  <div className="flex flex-row my-10">
                    <div className="w-14 h-2.5 gap-3 inline-flex">
                      {texts.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2.5 h-2.5 rounded-full ${
                            dotIndex === index
                              ? "bg-green-600"
                              : "bg-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div
                    className="w-60 h-20 mb-20 px-10 py-8 bg-zinc-900 rounded-full justify-center items-center gap-4 inline-flex hover:cursor-pointer hover:shadow-none transition-transform duration-300 transform hover:scale-90 hover:bg-zinc-700"
                    onClick={handleExploreClick}
                  >
                    <div className="w-full text-center text-white text-xl font-semibold font-manrope capitalize ">
                      Explore more -{">"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
