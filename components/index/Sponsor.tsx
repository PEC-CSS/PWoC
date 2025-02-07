'use client';

import { motion } from 'framer-motion';
import { Button } from "../../components/button";
import { Card, CardContent } from "../../components/card";

export default function Sponsor() {
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
                Sponsors
              </h2>
              <p className="text-[#274495]/80 text-lg md:text-2xl md:font-semibold mb-8">
                ThankYou For Supporting US!!
              </p>
              <p className="text-[#274495]/80 text-lg md:text-2xl md:font-semibold mb-8">
              Sponsor us and get featured in here with many more perks!
              </p>
             
            <Button 
              size="lg"
              className="bg-[#274495] hover:bg-[#0B4F6C]/90 text-white text-lg px-8 py-6"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/docs/PWOC_Sponser_Brochure.pdf";
                link.download = "PWOC25_Brochure.pdf"; 
                link.click();
              }}
            >
              Get Brochure
            </Button>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
