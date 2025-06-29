'use client';
import React from 'react';
import { motion } from 'framer-motion';

type FocusArea = {
  title: string;
  description: string;
  imgSrc?: string;
  alt?: string;
};

const AREAS: FocusArea[] = [
  {
    title: 'Therapy for Healthcare Providers and Students',
    description:
      'Address burnout, compassion fatigue, imposter syndrome, perfectionism, and other challenges unique to the healthcare environment.',
    imgSrc: '/focus1.jpg',
    alt: 'Healthcare providers group',
  },
  {
    title: 'Therapy for Trauma and Grief',
    description:
      'Process childhood trauma, recent traumatic events, or loss, in a supportive environment that promotes grounding and healing.',
    imgSrc: '/focus2.jpg',
    alt: 'Counseling session',
  },
  {
    title: 'Therapy for Second-generation Individuals',
    description:
      'Explore identity challenges and cultural navigation as a second-generation immigrant, including family expectations and belonging.',
    imgSrc: '/focus3.jpg',
    alt: 'Family multigenerational',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const AreasOfFocus: React.FC = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
        Areas of Focus
      </h2>
    </div>

    <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
      {AREAS.map((area, i) => (
        <motion.div
          key={area.title}
          className="flex flex-col items-center text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={i}
        >
          {area.imgSrc && (
            <div className="w-72 h-72 mb-4 rounded-full overflow-hidden bg-gray-200">
              <img
                src={area.imgSrc}
                alt={area.alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h3 className="text-xl font-medium text-gray-800 mb-2">{area.title}</h3>
          <p className="text-gray-600">{area.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AreasOfFocus;
