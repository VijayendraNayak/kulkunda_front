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
        <Metadata />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <OpenGraphMetadata />

        {/* Facebook meta tags */}
        <FacebookMetadata />

        {/* Instagram meta tags */}
        <InstagramMetadata />
      </head>

      <body className={inter.className}>
        <Providers>
          <HeaderSelector />
          {children}
          <Languageswitch/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

const Metadata = () => (
  <>
    <title>Kulkunda Shree Basaweshwara Temple</title>
    <meta
      name="description"
      content="Your custom description goes here. Update this to a meaningful description for SEO."
    />
  </>
);

const OpenGraphMetadata = () => (
  <>
    <meta property="og:title" content="Kulkunda Shree Basaweshwara Temple" />
    <meta
      property="og:description"
      content="Your custom description goes here. Update this to a meaningful description for SEO."
    />
    <meta property="og:image" content="/og-image.jpg" />
    <meta property="og:url" content="https://basavanamoolatemple.in" />
    <meta name="og:locale" content="en_US" />
  </>
);

const FacebookMetadata = () => (
  <>
    <meta property="og:site_name" content="Kulkunda Basaweshwara" />
    <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=100090518155741" />
  </>
);

const InstagramMetadata = () => (
  <>
    <meta property="instagram:card" content="summary_large_image" />
    <meta
      property="instagram:creator"
      content="https://www.instagram.com/shreebasaveshwaratemple?igsh=Ymk0ZXhwZHV0a3lk"
    />
  </>
);
