import { ReactNode } from 'react'
import './globals.css'
import { Poppins, Bebas_Neue as BebasNeue } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-poppins',
})
const bebasNeue = BebasNeue({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-bebas-neue',
})
export const metadata = {
  title: 'Elevate Fashion',
  description:
    'Loja criada por Gabriel Bergamini, Dev Front-End, desde do layout até o final do projeto.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${bebasNeue.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  )
}
