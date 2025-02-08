import { motion } from "framer-motion";
import { Card, CardContent } from "../components/card";

export default function Timeline() {
  const timelineEvents = [
    {
      date: "February 10, 2025",
      title: "Registration Opens",
      description: "Start your journey by registering for PWOC",
    },
    {
      date: "February 12, 2025",
      title: "Project Announcement",
      description: "Browse and select from exciting project opportunities",
    },
    {
      date: "February 13, 2025",
      title: "Coding Period Begins",
      description: "Start working on your projects with mentor guidance",
    },
    {
      date: "March 3, 2025",
      title: "Mid-term Review",
      description: "Progress check and feedback from mentors",
    },
    {
      date: "March 31, 2025",
      title: "Final Submissions",
      description: "Submit your completed projects",
    },
    {
      date: "April 5, 2025",
      title: "Results & Awards",
      description: "Celebration and recognition of achievements",
    },
  ];

  return (
    <section className="py-20 bg-red">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#274495] mb-4">
              Program Timeline
            </h2>
            <p className="text-2xl text-[#274495]/80 max-w-3xl mx-auto font-semibold">
              Your journey through PWOC
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0B4F6C]/20 rounded-full hidden md:block" />

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center md:items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="w-10 h-10 text-[#274495] rounded-full border-4 border-white flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="mt-4 md:mt-0 md:w-1/2">
                    <Card
                      className={`bg-white/80 backdrop-blur-sm border-none p-4 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="text-sm text-[#274495]/60 mb-1 font-semibold">
                          {event.date}
                        </div>
                        <h3 className="text-2xl font-semibold text-[#0B4F6C] mb-2">
                          {event.title}
                        </h3>
                        <p className="text-[#274495]/70 text-xl">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
