/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tema Principal - Azul
        primary: {
          50: '#E6E9F4',
          100: '#CCD3E9',
          200: '#99A7D3',
          300: '#667BBD',
          400: '#334FA7',
          DEFAULT: '#0B2086', // Color base
          600: '#091A6B',
          700: '#071350',
          800: '#040D36',
          900: '#02061B',
        },
        // Tema Secundario - Azul Oscuro
        secondary: {
          50: '#E7E9EE',
          100: '#CFD3DD',
          200: '#9FA7BB',
          300: '#6F7B99',
          400: '#3F4F77',
          DEFAULT: '#0143A7', // Color base
          600: '#0C1639',
          700: '#09112B',
          800: '#060B1C',
          900: '#03060E',
        },
        // Tema de Acento - Rojo
        accent: {
          50: '#FFE6E6',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          DEFAULT: '#FF0809', // Color base
          600: '#CC0607',
          700: '#990505',
          800: '#660303',
          900: '#330202',
        },
        // Azul Corporativo
        corporate: {
          50: '#E6F1FF',
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          DEFAULT: '#0077FF',
          600: '#005FCC',
          700: '#004799',
          800: '#003066',
          900: '#001833',
        },
        // Tema Neutro Cálido
        warm: {
          50: '#FAF9F7',
          100: '#F5F3EF',
          200: '#EBE7DF',
          300: '#E2DBCF',
          400: '#D8CFBF',
          DEFAULT: '#CFC3AF',
          600: '#A69C8C',
          700: '#7D7569',
          800: '#544E46',
          900: '#2A2723',
        },
        // Tema Neutro Frío
        cool: {
          50: '#F7F9FA',
          100: '#EFF3F5',
          200: '#DFE7EB',
          300: '#CFDBE2',
          400: '#BFCFD8',
          DEFAULT: '#AFC3CF',
          600: '#8C9CA6',
          700: '#69757D',
          800: '#464E54',
          900: '#23272A',
        },
        // Grises Neutros
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          DEFAULT: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        }
      },
      // Gradientes predefinidos
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-colors-primary-DEFAULT), var(--tw-colors-primary-600))',
        'gradient-secondary': 'linear-gradient(to right, var(--tw-colors-secondary-DEFAULT), var(--tw-colors-secondary-600))',
        'gradient-accent': 'linear-gradient(to right, var(--tw-colors-accent-DEFAULT), var(--tw-colors-accent-600))',
        'gradient-corporate': 'linear-gradient(to right, var(--tw-colors-corporate-DEFAULT), var(--tw-colors-corporate-600))',
        'gradient-warm': 'linear-gradient(to right, var(--tw-colors-warm-DEFAULT), var(--tw-colors-warm-600))',
        'gradient-cool': 'linear-gradient(to right, var(--tw-colors-cool-DEFAULT), var(--tw-colors-cool-600))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};