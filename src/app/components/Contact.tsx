'use client';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {
  //const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [verified, setVerified] = useState(false);

  const handleRecaptcha = (value: string | null) => {
    setVerified(!!value);
  };

  const handleSubmit = () => {
    //e.preventDefault();
    if (!verified) {
      alert("Please complete the CAPTCHA");
      return;
    }
    
  };

  return (
    <section className="px-4 py-10 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
        </div>

        <div>
          <label className="font-bold block mb-1">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-green-800 rounded-md px-4 py-3 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-green-800 rounded-md px-4 py-3 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">Phone</label>
          <input
            type="tel"
            placeholder="(555) 234-5678"
            className="w-full border border-green-800 rounded-md px-4 py-3 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="font-bold block mb-1">How can I help you?</label>
          <textarea
            placeholder="Your message"
            className="w-full border border-green-800 rounded-md px-4 py-3 placeholder-gray-400"
            rows={4}
          ></textarea>
        </div>

        <div>
          <label className="font-bold block mb-1">Preferred Contact Time</label>
          <input
            type="text"
            placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
            className="w-full border border-green-800 rounded-md px-4 py-3 placeholder-gray-400"
          />
          <p className="text-sm text-gray-600 mt-1">
            Let us know when you&apos;re typically available for a call or consultation
          </p>
        </div>

        <div>
          <label className="font-bold block mb-1">Preferred Contact Method</label>
          <select className="w-full border border-green-800 rounded-md px-4 py-3 text-gray-700">
            <option>Select preferred method</option>
            <option>Email</option>
            <option>Phone</option>
            <option>Text</option>
          </select>
        </div>

        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} 
            onChange={handleRecaptcha}
          />
        </div>

        <button
          type="submit"
          disabled={!verified}
          className="bg-green-900 text-white w-full py-3 rounded-md hover:bg-green-800 transition disabled:opacity-50 cursor-pointer"
        >
          Submit
        </button>

        <p className="text-xs text-gray-600 text-center mt-4">
          ⓘ By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
        </p>
      </form>
    </section>
  );
};

export default Contact;
