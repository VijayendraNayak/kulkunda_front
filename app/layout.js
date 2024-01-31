import Head from 'next/head';
import { Inter } from 'next/font/google';
import Footer from './Components/Footer';
import HeaderSelector from './Components/HeaderSelector';
import './globals.css';
import { Providers } from './Redux/provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Title and Meta Description */}
        <title>Kulkunda Shree Basaveshwara Temple</title>
        <meta
          name="description"
          content="Shree Basaveshwara Temple is a temple located at Basavanamoola,Kulkunda. This temple is located at 2kms away from Kukke Shree Subrahmanya Temple. Lord Shiva is worshipped in the form of bull(Basava) here."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Kulkunda Shree Basaveshwara Temple" />
        <meta
          property="og:description"
          content="Shree Basaveshwara Temple is a temple located at Basavanamoola,Kulkunda.This temple is located at 2kms away from Kukke Shree Subrahmanya Temple."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://basavanamoolatemple.in" />
        <meta name="og:locale" content="en_US" />

        {/* Facebook meta tags */}
        <meta property="og:site_name" content="Kulkunda Shree Basaveshwara Temple" />
        <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=100090518155741" />

        {/* Instagram meta tags */}
        <meta property="instagram:card" content="Our instagram page" />
        <meta property="instagram:creator" content="https://www.instagram.com/shreebasaveshwaratemple?igsh=Ymk0ZXhwZHV0a3lk" />

        {/* Additional meta tags can be added as needed */}
      </Head>

      <body className={inter.className}>
        <Providers>
          <HeaderSelector />
          {children}
          <Footer />
        </Providers>
      </body>
    </>
  );
}