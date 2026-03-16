/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

// STEP 3: Accept the theme prop passed down from App.js
const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    //console.log(container);
  };

  // STEP 3: Dynamically define colors based on the current theme
  const bgColor = theme === "dark" ? "#000000" : "#ffffff";
  const particleColor = theme === "dark" ? "#ffffff" : "#000000";

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: bgColor, // 👈 Dynamically applied
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 75,
            duration: 15,
          },
          grab: {
            distance: 75,
          },
        },
      },
      particles: {
        color: {
          value: particleColor, // 👈 Dynamically applied
        },
        links: {
          color: particleColor, // 👈 Dynamically applied
          distance: 100,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 500,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1.5, max: 1.5 },
        },
      },
      detectRetina: false,
    }),
    [bgColor, particleColor], // 👈 CRITICAL: Tells React to recalculate options when theme colors change!
  );

  if (!init) return <></>; // Optional: prevents rendering blank canvas before engine loads

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
