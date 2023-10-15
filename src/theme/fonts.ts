import { NextFont } from 'next/dist/compiled/@next/font'
import { Manrope } from 'next/font/google'

export const manrope: NextFont = Manrope({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
})
