import React, { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { TransparentNavContext } from 'pages/_app';
import TheNav from 'components/blocks/TheNav';
import TheFooter from 'components/blocks/TheFooter';
import { about } from 'data/content';

const title = 'SEBELAS MARET INTERNATIONAL IoT CHALLENGE 2021';

export default function MainLayout({ children }) {
  const [navTransparent] = useContext(TransparentNavContext);
  const { basePath } = useRouter();

  return (<>
    <Head>
      <title>SEBELAS MARET INTERNATIONAL IoT CHALLENGE 2021</title>
      <meta name="title" content={title} />
      <link rel="shortcut icon" href="/assets/LOGO-SEMAR-IOT_no-text.png" type="image/x-icon" />
      <base href={basePath} />
      <meta name="description" content={about} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={about} />
      <meta property="og:url" content={basePath} />
      <meta property="og:image" content="/assets/logo creatistic.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={basePath} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={about} />
      <meta property="twitter:image" content={basePath} />
      {/* Indexing */}
      <meta name="robots" content="index, follow" />
    </Head>

    <div className="dark relative w-full min-h-screen bg-yellow-50 flex flex-col items-baseline">
      <TheNav transparent={navTransparent} />
      {children}
      <TheFooter />
    </div>
  </>);
};
