import { SiWorldhealthorganization } from "react-icons/si";
import ParticlesBackground from './ParticlesBackground'; 
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Link href="/">

         <div className="p-5 m-4 flex">
        <SiWorldhealthorganization size={60} />
        <pre className="mt-1 ml-2" >
          Dr. Serena Blake
          <pre>Psychological Services</pre>
        </pre>
      </div>
      </Link>
      

      <section className="relative h-[75vh] mx-4 bg-white flex items-center justify-center text-black overflow-hidden rounded-xl shadow-lg">
        <ParticlesBackground />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Compassionate Psychiatric Care
          </h1>
          <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
            Supporting your mental health journey with understanding and
            professionalism.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd2yXwQp_mkA-_W86YM4aicZKc0pZlSw2mrA-SGm2GLQvE15g/viewform?usp=dialog" className="cursor-pointer">
                    <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer">
            Schedule a Consultation
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
