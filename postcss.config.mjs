/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Perhatikan perubahan di baris ini
    autoprefixer: {},
  },
};

export default config;