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
    title: "What is Winter of Code?",
    description:
      "Winter of Code is a coding event that brings together passionate developers to work on exciting projects during the winter season.",
  },
  {
    title: "How can I participate?",
    description:
      "You can participate by registering on our website and choosing a project to contribute to. We welcome developers of all skill levels!",
  },
  {
    title: "When does the event start?",
    description:
      "The event typically starts in early December and runs through February. Check our timeline for specific dates. just for testing",
  },
  {
    title: "When does the event start?",
    description:
      "The event typically starts in early December and runs through February. Check our timeline for specific dates.",
  },
  {
    title: "When does the event start?",
    description:
      "The event typically starts in early December and runs through February. Check our timeline for specific dates.",
  },
  {
    title: "When does the event start?",
    description:
      "The event typically starts in early December and runs through February. Check our timeline for specific dates.",
  },
  {
    title: "When does the event start?",
    description:
      "The event typically starts in early December and runs through February. Check our timeline for specific dates.",
  },
  // Add more FAQs as needed
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