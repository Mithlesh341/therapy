'use client';
import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesSwarm = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="swarm"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#749BC2" },
        particles: {
          number: { value: 90 },
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 100 },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "bounce" },
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesSwarm;

