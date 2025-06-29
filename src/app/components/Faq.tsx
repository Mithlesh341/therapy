'use client';
import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const faqItems = [
  {
    question: 'What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?',
    answer: 'CBT-I typically includes sleep hygiene, stimulus control, sleep restriction, and cognitive therapy techniques.',
  },
  {
    question: 'Do you treat children or adolescents?',
    answer: 'Currently, services are focused on adults. Adolescent treatment is not offered at this time.',
  },
  {
    question: 'Which geographic regions do you serve?',
    answer: 'Services are available to clients residing in states where the provider is licensed, typically listed on the practice website.',
  },
  {
    question: 'Do you offer in-person sessions?',
    answer: 'Sessions are currently held via secure telehealth video platform only.',
  },
  {
    question: 'What technology do we use for virtual sessions?',
    answer: 'A HIPAA-compliant video platform like SimplePractice or Zoom for Healthcare is typically used.',
  },
  {
    question: 'What are your hours?',
    answer: 'Appointment hours vary and include daytime and limited evening slots on weekdays.',
  },
  {
    question: 'Do you take insurance?',
    answer: 'Yes, certain plans are accepted. Please refer to the Rates & Insurance section for details.',
  },
  {
    question: 'What is the cost of therapy?',
    answer: 'Individual sessions typically cost between $150–$225, depending on service type.',
  },
  {
    question: 'What are the benefits of private pay therapy?',
    answer: 'Private pay offers greater privacy, flexibility, and choice in therapeutic approach.',
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center font-serif font-semibold text-[#2f4550] mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-blue-300 pb-4">
            <button
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left group"
            >
              <span className="text-lg text-blue-800 font-medium group-hover:underline">
                {item.question}
              </span>
              <FiChevronRight
                className={`w-5 h-5 text-blue-800 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-90' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
