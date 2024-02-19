import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import Footer from './Components/Footer';
import Languageswitch from './Components/Languageswitch';
import HeaderSelector from './Components/HeaderSelector';
import './globals.css';
import { Providers } from './Redux/provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>



        {/* Metadata */}
        <MetaTags />

        {/* Favicon */}
        <link rel="icon" href="https://i.postimg.cc/jSdZXJKZ/Shree-Basaveshwara-Temple-1-modified.png" />

        {/* Open Graph, Facebook, and Instagram meta tags */}
        <OpenGraphMetadata />
        <FacebookMetadata />
        <InstagramMetadata />
        <SpeedInsights />
        <Analytics />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PMR9ZW8J7F"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-PMR9ZW8J7F');
          `,
        }} />
      </head>

      <body className={inter.className}>
        <Providers>
          <HeaderSelector />
          {children}
          <Languageswitch />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

const MetaTags = () => (
  <>
    <title>Kulkunda Shree Basaveshwara Temple</title>
    <meta
      name="description"
      content="Shree Basaveshwara Temple is a Hindu temple situated at Basavanamoola, Kulkunda. This temple is located 2kms away from Kukke Shree Subrahmanya Temple. Lord Shiva is worshipped here in the form of bull (Basava)."
    />
    <meta name="keywords" content="Shree Basaveshwara Temple, Hindu temple, Basavanamoola, Kulkunda, Lord Shiva, Kukke Subrahmanya,Kukke Shree Subrahmanya Temple, sacred place, cultural significance,historical place,Bisle Ghats,Tulunadu,Temples in Coastal Karnataka,Temples in Kukke Subrahmanya,Nearby places in Subrahmanya,places to visit,places to visit at Subrahmanya,Nearby temples to Kukke Shri Subrahmanya Temple,Dharmasthala,Shri Kshethra Dharmasthala,Kulkunda Shree Basaveshwara Temple, Kukke Shri Subrahmanya Temple, Adi Subrahmanya Temple, Shri Subrahmanya Mutt, Kashikatte Shri Ganapathi Temple, Biladwara, Shri Vanadurga Devi Temple, Shree Abhaya Mahaganapathi, Agrahara Shri Somanatha Temple, Shree Harihareshwara Temple, Kumaradhara River (Bathing Ghat), Shri Kshethra Dharmasthala, Bisle Ghat Viewpoint, Patla Betta, Mallalli Falls, Hindu temples, Karnataka, Western Ghats, Serpent king Vasuki, Kumaraparvatha, Dharmasthala Manjunatha Swamy Temple, Free meals, Jain Pergade family, Bisle Ghat, Somwarpet, Coorg, Monsoon season, Nature enthusiasts, Trekkers,Kumara Parvatha trek,Kumara Parvatha trekking,Shesha Parvatha,South India treks,South India Temples,Karnataka Hikers,Karnataka Trekkers,Bhattaramane,Bhatta's house,Bhattara Mane,Treks in Karnataka,Treks in Western Ghats,Treks in South India,Toughest treks, Western Ghats landscapes." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

const OpenGraphMetadata = () => (
  <>
    <meta property="og:title" content="Kulkunda Shree Basaveshwara Temple" />
    <meta
      property="og:description"
      content="Shree Basaveshwara Temple is a Hindu temple situated at Basavanamoola, Kulkunda. This temple is located 2kms away from Kukke Shree Subrahmanya Temple. Lord Shiva is worshipped here in the form of bull (Basava)."
    />
    <meta property="og:image" content="https://i.postimg.cc/jSdZXJKZ/Shree-Basaveshwara-Temple-1-modified.png" />
    <meta property="og:url" content="https://basavanamoolatemple.in" />
    <meta name="og:locale" content="en_US" />
  </>
);

const FacebookMetadata = () => (
  <>
    <meta property="og:site_name" content="Kulkunda Shree Basaveshwara Temple" />
    <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=100090518155741" />
  </>
);

const InstagramMetadata = () => (
  <>
    <meta property="instagram:card" content="Instagram page" />
    <meta
      property="instagram:creator"
      content="https://www.instagram.com/shreebasaveshwaratemple?igsh=Ymk0ZXhwZHV0a3lk"
    />
  </>
);
