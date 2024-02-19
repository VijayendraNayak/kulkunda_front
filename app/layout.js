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
    {/* Meta Tags for Kulkunda Shree Basaveshwara Temple */}
    <title>Kulkunda Shree Basaveshwara Temple</title>
    <meta
      name="description"
      content="Shree Basaveshwara Temple is a Hindu temple situated at Basavanamoola, Kulkunda. This temple is located 2kms away from Kukke Shree Subrahmanya Temple. Lord Shiva is worshipped here in the form of bull (Basava)."
    />
    <meta
      name="keywords"
      content="Shree Basaveshwara Temple, Hindu temple, Basavanamoola, Kulkunda, Lord Shiva, Kukke Subrahmanya,Kukke Shree Subrahmanya Temple, sacred place, cultural significance,historical place,Bisle Ghats,Tulunadu,Temples in Coastal Karnataka,Temples in Kukke Subrahmanya,Nearby places in Subrahmanya,places to visit,places to visit at Subrahmanya,Nearby temples to Kukke Shri Subrahmanya Temple,Dharmasthala,Shri Kshethra Dharmasthala,Kulkunda Shree Basaveshwara Temple, Kukke Shri Subrahmanya Temple, Adi Subrahmanya Temple, Shri Subrahmanya Mutt, Kashikatte Shri Ganapathi Temple, Biladwara, Shri Vanadurga Devi Temple, Shree Abhaya Mahaganapathi, Agrahara Shri Somanatha Temple, Shree Harihareshwara Temple, Kumaradhara River (Bathing Ghat), Shri Kshethra Dharmasthala, Bisle Ghat Viewpoint, Patla Betta, Mallalli Falls, Hindu temples, Karnataka, Western Ghats, Serpent king Vasuki, Kumaraparvatha, Dharmasthala Manjunatha Swamy Temple, Free meals, Jain Pergade family, Bisle Ghat, Somwarpet, Coorg, Monsoon season, Nature enthusiasts, Trekkers,Kumara Parvatha trek,Kumara Parvatha trekking,Shesha Parvatha,South India treks,South India Temples,Karnataka Hikers,Karnataka Trekkers,Bhattaramane,Bhatta's house,Bhattara Mane,Treks in Karnataka,Treks in Western Ghats,Treks in South India,Toughest treks, Western Ghats landscapes."
    />

    {/* Meta Tags for Kulkunda Shree Basaveshwara Temple */}
    <title>Kulkunda Shree Basaveshwara Temple: A Majestic Tribute to Lord Shiva</title>
    <meta
      name="description"
      content="Immerse yourself in the serenity of Kulkunda Shree Basaveshwara Temple, a magnificent example of Hoysala architecture. Discover its intricate carvings, captivating history, and spiritual significance."
    />
    <meta
      name="keywords"
      content="Kulkunda Shree Basaveshwara Temple, Kulkunda, Karnataka, India, temples, Basaveshwara, Shiva, Hoysala architecture, religious tourism"
    />

    {/* Meta Tags for Kukke Subrahmanya Temple */}
    <title>Kukke Subrahmanya Temple: A Divine Abode of Lord Subrahmanya</title>
    <meta
      name="description"
      content="Experience the divine aura of Kukke Subrahmanya Temple, a renowned pilgrimage site dedicated to Lord Subrahmanya. Explore its rich history, stunning architecture, and spiritual significance."
    />
    <meta
      name="keywords"
      content="Kukke Subrahmanya Temple, Kukke Subrahmanya, Karnataka, India, temples, pilgrimage, Lord Subrahmanya, Murugan, serpent god, religious tourism"
    />

    {/* Meta Tags for Nearby Places to Visit in Kukke Subrahmanya */}
    <title>Uncover the Hidden Gems of Kukke Subrahmanya: Explore Nearby Places to Visit</title>
    <meta
      name="description"
      content="Kukke Subrahmanya offers more than just the divine temple. Discover nearby waterfalls, trekking trails, and other attractions for a complete and unforgettable experience."
    />
    <meta
      name="keywords"
      content="Kukke Subrahmanya, Karnataka, India, nearby places to visit, waterfalls, trekking, Kumaraparvatha, Bhagamandala, Talacauvery, religious tourism, nature tourism"
    />

    {/* Meta Tags for Places to Visit in Subrahmanya */}
    <title>Subrahmanya: A Pilgrim's Paradise with Unmissable Destinations</title>
    <meta
      name="description"
      content="From temples and waterfalls to caves and hills, Subrahmanya offers a plethora of attractions for pilgrims and nature lovers alike. Plan your perfect itinerary with this comprehensive guide."
    />
    <meta
      name="keywords"
      content="Subrahmanya, Karnataka, India, places to visit, temples, waterfalls, caves, hills, Kukke Subrahmanya Temple, Kumaraparvatha, Bhagamandala, Talacauvery, religious tourism, nature tourism"
    />

    {/* Meta Tags for Kukke Subrahmanya Tour Package */}
    <title>Experience the Divine with Kukke Subrahmanya Tour Package</title>
    <meta
      name="description"
      content="Embark on a spiritual journey with a customized Kukke Subrahmanya Tour Package. Enjoy hassle-free travel, comfortable accommodation, and expert guidance to explore the region's rich culture and heritage."
    />
    <meta
      name="keywords"
      content="Kukke Subrahmanya Tour Package, Kukke Subrahmanya, Karnataka, India, tour packages, pilgrimage, temples, religious tourism, cultural tourism"
    />
    {/* Meta Tags for Kulkunda Shree Basaveshwara Temple */}
    <title>Kulkunda Shree Basaveshwara Temple</title>
    <meta
      name="description"
      content="Shree Basaveshwara Temple is a Hindu temple situated at Basavanamoola, Kulkunda. This temple is located 2kms away from Kukke Shree Subrahmanya Temple. Lord Shiva is worshipped here in the form of bull (Basava)."
    />
    <meta
      name="keywords"
      content="Shree Basaveshwara Temple, Hindu temple, Basavanamoola, Kulkunda, Lord Shiva, Kukke Subrahmanya,Kukke Shree Subrahmanya Temple, sacred place, cultural significance,historical place,Bisle Ghats,Tulunadu,Temples in Coastal Karnataka,Temples in Kukke Subrahmanya,Nearby places in Subrahmanya,places to visit,places to visit at Subrahmanya,Nearby temples to Kukke Shri Subrahmanya Temple,Dharmasthala,Shri Kshethra Dharmasthala,Kulkunda Shree Basaveshwara Temple, Kukke Shri Subrahmanya Temple, Adi Subrahmanya Temple, Shri Subrahmanya Mutt, Kashikatte Shri Ganapathi Temple, Biladwara, Shri Vanadurga Devi Temple, Shree Abhaya Mahaganapathi, Agrahara Shri Somanatha Temple, Shree Harihareshwara Temple, Kumaradhara River (Bathing Ghat), Shri Kshethra Dharmasthala, Bisle Ghat Viewpoint, Patla Betta, Mallalli Falls, Hindu temples, Karnataka, Western Ghats, Serpent king Vasuki, Kumaraparvatha, Dharmasthala Manjunatha Swamy Temple, Free meals, Jain Pergade family, Bisle Ghat, Somwarpet, Coorg, Monsoon season, Nature enthusiasts, Trekkers,Kumara Parvatha trek,Kumara Parvatha trekking,Shesha Parvatha,South India treks,South India Temples,Karnataka Hikers,Karnataka Trekkers,Bhattaramane,Bhatta's house,Bhattara Mane,Treks in Karnataka,Treks in Western Ghats,Treks in South India,Toughest treks, Western Ghats landscapes."
    />
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
