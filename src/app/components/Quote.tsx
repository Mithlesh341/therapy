'use client';
import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection: React.FC = () => (
  <section
    className="relative bg-cover bg-center bg-no-repeat h-[450px] md:h-[460px] text-white py-28"
    style={{ backgroundImage: "url('/quote.jpg')" }}
  >
    <div className="absolute inset-0 bg-white/17"></div> 

    <motion.div
      className="relative max-w-4xl mx-auto text-center z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <blockquote className="text-2xl md:text-4xl italic leading-relaxed">
        “Therapy can be a space where you invest in yourself—one of the highest forms of self-care.”
      </blockquote>
      <p className="mt-4 text-lg text-white/80">– Audre Lorde</p>
    </motion.div>
  </section>
);

export default QuoteSection;
