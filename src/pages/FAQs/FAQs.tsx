import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Befounder?",
    answer:
      "Befounder is a community that connects developers, designers and other people with a shared interest in building and developing projects.",
  },
  {
    question: "How do i post an offer for others to apply?",
    answer:
      "You can publicly post an offer on the offers page. You will be asked to provide a project title, project description, the role you need for your project, Required hours, and project duration before posting.",
  },
  {
    question: "What types of projects are available for Offers?",
    answer:
      "Anything you can think of or need for your own project. Some projects like: websites, bots (WhatsApp, Discord, Slack, Telegram) and more.",
  },
  {
    question: "What should I name my Offer?",
    answer:
      "Keep it simple and descriptive! The name should highlight what is distinctive about that particular Offer. Try to think about what will catch someone attentive.",
  },
  {
    question:
      "How do I contact the Offer Poster or the person who applied for an Offer?",
    answer:
      "If you have questions for the Offer Poster, you can include them in the application message, or reach out through any social media platforms linked in the user’s profile. The Poster will indicate a preferred communication channel (such as email) in the Offer post for discussions throughout the project.",
  },
  {
    question:
      "What if I have a dispute with Offer Poster or a problem with the work?",
    answer:
      "We encourage our Offer Posters and the person who applied for an offer to try and settle conflicts among themselves. If for any reason this fails, users can contact us via the “Contact Us” button under the “FAQ” at the bottom end of the website.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <main className="md:px-16 px-4 mb-12">
      <h1 className="text-[#090A2A] font-semibold text-3xl md:text-5xl mt-14 mb-10 text-center">
        Frequently Asked Questions
      </h1>
      <hr className="mb-8 text-[#090A2A]" />

      <div>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`bg-[#F7F7FD] p-6 rounded-3xl mb-8 flex  md:gap-20 ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div className="w-full">
              <h2
                className="text-[#090A2A] text-xl md:text-2xl font-semibold mb-5"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}{" "}
              </h2>

              {activeIndex === index && (
                <p className="text-[#494A50] text-lg md:text-xl">
                  {item.answer}
                </p>
              )}
            </div>
            <span
              className="text-[#090A2A] font-medium text-4xl cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {activeIndex === index ? (
                <FaMinus fontSize={18} color="#090A2A" />
              ) : (
                <FaPlus fontSize={18} color="#090A2A" />
              )}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQs;
