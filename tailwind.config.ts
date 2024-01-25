import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'vista-white': {
          50: '#FFFFFE',
          100: '#FEFEFE',
          200: '#FDFDFC',
          300: '#FCFBFB',
          400: '#FAF8F7',
          500: '#F8F5F4',
          600: '#DFDDDC',
          700: '#959392',
          800: '#706E6E',
          900: '#4A4A49'
        },
        'falu-red': {
          50: '#F9F3F3',
          100: '#F2E8E8',
          200: '#DFC5C5',
          300: '#CBA2A2',
          400: '#A45D5D',
          500: '#7D1717',
          600: '#711515',
          700: '#4B0E0E',
          800: '#380A0A',
          900: '#260707'
        },
        sandrift: {
          50: '#FBF9F8',
          100: '#F8F3F1',
          200: '#EDE2DD',
          300: '#E1D1C8',
          400: '#CBAE9F',
          500: '#B58B76',
          600: '#A37D6A',
          700: '#6D5347',
          800: '#513F35',
          900: '#362A23'
        },
        'old-rose': {
          50: '#FCF8F9',
          100: '#F9F2F3',
          200: '#EFDEE0',
          300: '#E5CACE',
          400: '#D2A3A9',
          500: '#BE7B84',
          600: '#AB6F77',
          700: '#724A4F',
          800: '#56373B',
          900: '#392528'
        },
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        }
      }
    }
  }
}
