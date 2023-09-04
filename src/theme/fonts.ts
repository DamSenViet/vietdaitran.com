import { NextFont } from 'next/dist/compiled/@next/font'
import { Permanent_Marker, Poppins } from 'next/font/google'

export const poppins: NextFont = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
})

export const permanent_marker: NextFont = Permanent_Marker({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
})
