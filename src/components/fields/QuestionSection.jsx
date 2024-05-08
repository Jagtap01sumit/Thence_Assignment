import React, { useState } from "react";
import QuestionText from "../../assets/images/QuestionText.png";
import QuestionPageImg from "../../assets/images/QuestionPageImg.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqContent = [
    {
      question: "Do you offer freelancers?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question:
        "What’s the guarantee that I will be satisfied with the hired talent",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency direct",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    // Add more FAQ items here
  ];

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="w-full h-full mt-20">
      <div className="flex flex-1 md:flex-row flex-col border bg-[#E8EEE7] m-4 rounded-3xl">
        <div className="md:w-1/2">
          <div className="p-20 pl-30">
            <img className="w-50 h-10" src={QuestionText}></img>
            <div className="font-manrope font-semibold lg:text-5xl text-2xl ">
              Ask Questions
            </div>
          </div>
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <img src={QuestionPageImg} className="w-3/5 h-2/5" />
          </div>
        </div>
        <div className="md:w-1/2 m-12 ">
          <section className="mt-16">
            <div className="container px-6 py-10 mt-4 mx-auto">
              {faqContent.map((faq, index) => (
                <div key={index}>
                  <button
                    className="w-full flex md:items-center items-start focus:outline-none justify-between "
                    onClick={() => handleToggle(index)}
                  >
                    <h1 className=" text-xl text-gray-700 font-bold">
                      {faq.question}
                    </h1>
                    {openIndex === index ? (
                      <FaMinus className="flex-shrink-0 w-6 h-6 text-blue-500 transition-transform duration-300 transform hover:scale-90" />
                    ) : (
                      <FaPlus className="flex-shrink-0 w-6 h-6 text-blue-500 transition-transform duration-300 transform hover:scale-90" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div
                      className={`flex mt-8 overflow-hidden transition-max-h transform ${
                        openIndex === index
                          ? "max-h-full scale-y-100"
                          : "max-h-0 scale-y-0"
                      }`}
                    >
                      <p className="max-w-3xl  text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                  {index !== faqContent.length - 1 && (
                    <hr className="my-8  border-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
