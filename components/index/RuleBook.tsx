'use client';

import { motion } from 'framer-motion';
import { Button } from "../button";
import { Card, CardContent } from "../card";
import { useRouter } from 'next/router';

export default function Rulebook() {
  const router = useRouter();
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
                Rule Book
              </h2>
              <p className="text-[#274495]/80 text-lg md:text-2xl md:font-semibold mb-8">
                
              </p>
              <p className="text-[#274495]/80 text-lg md:text-2xl md:font-semibold mb-8">
              Rules are like code syntax—ignore them, and everything breaks! 😄
              </p>
             
            <Button 
              size="lg"
              className="bg-[#274495] hover:bg-[#0B4F6C]/90 text-white text-lg px-8 py-6"
              onClick={() => {
                router.push('https://docs.google.com/document/d/1ve7NwdOCGYS_gz9YxMzns3wQA3TuSW8TDb4Z4F9KKRo/');
              }}
            >
              Link
            </Button>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
