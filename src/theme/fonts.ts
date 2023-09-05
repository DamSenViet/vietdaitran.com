import { NextFont } from 'next/dist/compiled/@next/font'
import {
  Permanent_Marker,
  Poppins,
  Yatra_One,
  Righteous,
} from 'next/font/google'

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

export const yatra_one: NextFont = Yatra_One({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
})

export const righteous: NextFont = Righteous({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
})
