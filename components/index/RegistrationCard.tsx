'use client';

import { motion } from 'framer-motion';
import { Button } from "../../components/button";
import { Card, CardContent } from "../../components/card";

export default function Registration() {
  return (
    <section className="relative py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-white/40 backdrop-blur-md border-none shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-6xl font-bold text-[#274495] mb-6">
                Register as Contributor
              </h2>
              <p className="text-[#274495]/80 text-lg md:text-2xl md:font-semibold mb-8">
                Join PWOC as a contributor and embark on an exciting journey of learning and growth. 
                Collaborate with experienced mentors, build amazing projects, and take your coding skills to the next level.
              </p>
              <Button 
              size="lg"
              className="bg-[#274495] hover:bg-[#0B4F6C]/90 text-white text-lg px-8 py-6"
              onClick={() => {
                window.location.href = "https://forms.gle/993inM5YmBs56UGs9"; // Replace with actual URL
              }}
            >
              Register Now
            </Button>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
