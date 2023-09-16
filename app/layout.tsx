//'use client'

import '../styles/globals.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import {AuthProvider} from '../component/authprovider/AuthProvider'
import {Providers} from './globalRedux/provider';
import dynamic from 'next/dynamic';



const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);


const inter = Inter({ subsets: ['latin'] })



  export const metadata = {
    title: 'skogsglantansforskola',
    description: 'forskolan märsta',

  
  }

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
     
      <body className={inter.className}>
       <AuthProvider>
       <Providers>
        {children}
        </Providers>
        </AuthProvider>
        </body>
    </html>
  )
}
