import { Inter } from 'next/font/google';
import Footer from './Components/Footer';
import HeaderSelector from './Components/HeaderSelector';
import './globals.css';
import { Providers } from './Redux/provider'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HeaderSelector/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Kulkunda Basaweshwara',
  description: 'Generated by create next app',
};