'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const RatesAndInsurance: React.FC = () => (
  <>
    <motion.section
      className="bg-blue-200 text-gray-800 py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-4xl mx-auto space-y-10">
      
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Rates and Insurance</h2>
          <p className="text-lg max-w-2xl mx-auto">
            My current session rate is listed below. I accept select insurance plans and offer support for out-of-network reimbursement.
          </p>
        </div>

        <div className="text-lg space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span>Individual session</span>
            <span className="font-medium">$200</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Couple Session</span>
            <span className="font-medium">$240</span>
          </div>
        </div>

        <div className="text-lg space-y-4">
          <p>
            I am currently in-network with <strong>BCBS</strong> and <strong>Aetna</strong>. For other plans, I am considered an out-of-network provider.
          </p>
          <p>
            I have partnered with <strong>Mentaya</strong> to help you determine your reimbursement eligibility.
          </p>
          <p>
            <a
              href="https://app.mentaya.com/p/Z84H2scgoRAmgJf4nV0y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Use this tool to check benefits
            </a>
          </p>
        </div>
      </div>
    </motion.section>

    <motion.div
      className="text-center mt-20 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <p className="text-black font-semibold text-xl md:text-2xl">
        Please note: I am not currently accepting new clients.
      </p>
    </motion.div>
  </>
);

export default RatesAndInsurance;
