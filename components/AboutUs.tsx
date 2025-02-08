import { motion } from "framer-motion";
import { Card, CardContent } from "../components/card";

export default function About() {
  const features = [
    {
      title: "🎓 Learn from Mentors",
      description: "Get mentored by developers with quality experience and knowledge.",
    },
    {
      title: "🚀 Build Projects",
      description: "Contribute to real-world projects and enhance your portfolio.",
    },
    {
      title: "🏆 Win Prizes",
      description: "Compete for exciting prizes and recognition in the developer community.",
    },
  ];

  return (
    <section className="relative py-28 bg-white/30 glassmorphism rounded-lg">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-[#214096] mb-4"
            >
              About PWOC
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-[#274495] max-w-3xl font-semibold mx-auto"
            >
              PWOC - PEC Winter Of Code is an opportunity to enhance your coding skills, collaborate on impactful projects, 
              and learn from industry experts. Whether you&apos;re a beginner or an experienced developer, this program offers a structured 
              environment to innovate, build, and grow.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Feature Cards */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-[#0B4F6C] mb-2">{feature.title}</h3>
                    <p className="text-[#274495]/70 font-semibold">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Animated Image with Zoom & Parallax using background-image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[200px] sm:h-[200px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url('/assets/logo/pwoc_photo.png')",
              backgroundSize: "cover", // Ensure image is fully visible within the container
              backgroundRepeat: "no-repeat", // Prevent image repetition
              backgroundPosition: "center", // Center the image within the container
            }}
          />
        </div>
      </div>
    </section>
  );
}
