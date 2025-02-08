import type { NextPage } from "next"
import { motion } from "framer-motion"
import PageLayout from "../components/layout/PageLayout"
import FAQCard from "../components/faqs/cards"

export type Faq = {
    icon?: any; // Make icon optional
    title: string;
    description: string;
};

const faqs: Faq[] = [ // Changed Faq to faqs (plural) and made it lowercase
  {
    title: "How can I participate?",
    description:
      "You can participate by registering on our website and choosing a project to contribute to. We welcome developers of all skill levels!",
  },
  {
    title: "When does the event start?",
    description:
      "The event typically starts in early Februaru and runs through March. Check our timeline for specific dates.",
  },
  {
    title: "Can beginners register for PWOC?",
    description:
      "Yes, beginners are encouraged to register for PWOC. There are projects suitable for all skill levels, and mentors are available to help you get started.",
  },
  {
    title: "What are the prerequisites for PWOC?",
    description:
      "There are no strict prerequisites. Basic knowledge of programming is helpful, but projects are available for various skill levels.",
  },
  {
    title: "How to contribute to projects?",
    description:
      "You can start contributing by selecting a project from the list, reading the documentation, and following the contribution guidelines provided by the project maintainers.",
  },
  {
    title: "What tech stacks will be used in PWOC?",
    description:
      "PWOC features projects using various tech stacks, including JavaScript, Python, Java, C++, HTML/CSS, and more. You can choose projects based on your interests and skills.",
  },
  {
    title: "How to register for PWOC?",
    description:
      "Registration can be done through the official PWOC website. Fill out the registration form and select the projects you are interested in.",
  },
  {
    title: "Is there any registration fee for PWOC?",
    description:
      "No, there is no registration fee for participating in PWOC. It is free and open to everyone.",
  },
  {
    title: "How to communicate with project maintainers and other contributors?",
    description:
      "Communication is facilitated through Discord, GitHub discussions, and mailing lists. Joining the official PWOC Discord server is highly recommended.",
  },
  {
    title: "What are the rules and regulations for PWOC?",
    description:
      "Participants are expected to follow the code of conduct, contribute respectfully, and adhere to the guidelines provided by project maintainers."
  }
];


const FAQs: NextPage = () => {
  return (
    <PageLayout title="Winter of Code | FAQs" description="Frequently Asked Questions about Winter of Code">
      <div className="min-h-screen bg-gradient-to-b from-[#0B4F6C]/10 to-transparent py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center text-[rgba(32,38,87,0.89)] mb-12"
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => ( // Use the lowercase faqs array
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FAQCard faq={faq} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
}

export default FAQs;