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
        'rodeo-dust': {
          50: '#FCFAF9',
          100: '#F9F6F4',
          200: '#F1E8E3',
          300: '#E9DBD1',
          400: '#D8BFAF',
          500: '#C7A48D',
          600: '#B3947F',
          700: '#776255',
          800: '#5A4A3F',
          900: '#3C312A'
        },
        ironstone: {
          50: '#FAF6F6',
          100: '#F4EEED',
          200: '#E5D4D1',
          300: '#D5BAB5',
          400: '#B5867E',
          500: '#955246',
          600: '#864A3F',
          700: '#59312A',
          800: '#432520',
          900: '#2D1915'
        },
        matrix: {
          50: '#FBF7F7',
          100: '#F6F0EF',
          200: '#EAD8D6',
          300: '#DDC1BE',
          400: '#C3938D',
          500: '#A9645C',
          600: '#985A53',
          700: '#653C37',
          800: '#4C2D29',
          900: '#331E1C'
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
