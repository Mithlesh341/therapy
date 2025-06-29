'use client';
import { motion } from 'framer-motion';
import React from 'react';

const services = [
  {
    title: 'Psychiatric Evaluation',
    description: 'Comprehensive assessments to understand your mental health needs.',
  },
  {
    title: 'Medication Management',
    description: 'Safe and effective use of psychiatric medications tailored to you.',
  },
  {
    title: 'Telepsychiatry',
    description: 'Secure and convenient virtual appointments from the comfort of your home.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
