'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutSection: React.FC = () => {
  const paragraphs = [
    `Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self‑care, providing the support and tools needed to improve this essential practice.`,
    ` Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.`,
    `Her approach is primarily psychodynamic and humanistic, enriched with positive psychology, existentialism, family systems, ACT, and mindfulness.`,
    `“Therapy can be a space where you invest in yourself—one of the highest forms of self‑care.”`,
    `You may be led to therapy by anxiety, depression, trauma, grief, self‑esteem issues, or relational stress. Whatever you're facing, you don’t have to face it alone.`,
  ];

  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-base md:text-lg">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            About Dr. Serena Blake
          </motion.h2>

          {paragraphs.map((text, i) =>
            text.startsWith('“') ? (
              <motion.blockquote
                key={i}
                className="border-l-4 border-teal-500 pl-4 italic text-lg text-gray-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                {text}
              </motion.blockquote>
            ) : (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                {text}
              </motion.p>
            )
          )}
        </div>

        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <div className="relative w-full h-80 md:h-[34rem] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/doctor.png" 
              alt="Dr. Jennifer Hahm"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
