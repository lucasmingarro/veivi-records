import "../app/assets/css/tailwind.css"
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600', '700'],
 })

export const metadata = {
  title: 'Veivi Records',
  description: 'Curated Music and more by Guille',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}>{children}</body>
    </html>
  )
}
