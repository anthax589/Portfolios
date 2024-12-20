/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColors: [
          {
            color: "#FF0069",
            enabled: true,
          },
          {
            color: "#00EAFF",
            enabled: true,
          },
          {
            color: "#FFB700",
            enabled: true,
          },
          {
            color: "#B26AE6",
            enabled: true,
          },
          {
            color: "#2E0EC7",
            enabled: true,
          },
        ],
      },
      speed: 4,
      horizontalPressure: 3,
      verticalPressure: 4,
      waveFrequencyX: 10,
      waveFrequencyY: 0,
      waveAmplitude: 10,
      shadows: 5,
      highlights: 10,
      colorBrightness: 1,
      colorSaturation: 2,
      wireframe: false,
      colorBlending: 9,
      backgroundColor: "#003FFF",
      backgroundAlpha: 1,
      grainScale: 2,
      grainSparsity: 0,
      grainIntensity: 0.05,
      grainSpeed: 1,
      resolution: 0.5,
    },
  },
  plugins: [],
};
