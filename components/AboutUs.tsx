import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "../components/card"

export default function About() {
  const features = [
    {
      title: "Learn from Experts",
      description: "Get mentored by industry professionals and experienced developers",
    },
    {
      title: "Build Projects",
      description: "Work on real-world projects and build your portfolio",
    },
    {
      title: "Win Prizes",
      description: "Compete for exciting prizes and recognition in the developer community",
    },
  ]

  return (
    <section className="relative py-28 bg-while">
      <div className="container mx-auto px-4 bg-red">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#274495] mb-4">About Winter of Code</h2>
            <p className="text-xl text-[#274495]/100 max-w-3xl font-semibold mx-auto">
              Join us in this exciting journey of learning, coding, and building amazing projects during the winter
              season.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-none">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold text-[#0B4F6C] mb-2">{feature.title}</h3>
                      <p className="text-[#274495]/70 font-semibold">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
                <img
                  src="https://media.istockphoto.com/id/1477244775/vector/flat-design-cartoon-illustration-software-development-concept.jpg?s=612x612&w=0&k=20&c=GefHp-vkljJuwOVTkg8g6RIgtsTt6TbBfRCvbW9VRJE="
                  alt="Winter Coding"
                  className="object-cover"
                  width={550}
                  height={100}
                />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

