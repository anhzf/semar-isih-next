import React, { useContext } from 'react';
import Head from 'next/head';
import { TransparentNavContext } from 'pages/_app';
import TheNav from 'components/blocks/TheNav';
import TheFooter from 'components/blocks/TheFooter';

export default function MainLayout({ children }) {
  const [navTransparent] = useContext(TransparentNavContext);

  return (<>
    <Head>
      <title>SEBELAS MARET INTERNATIONAL IoT CHALLENGE 2021</title>
    </Head>

    <div className="dark relative w-full min-h-screen bg-yellow-50 flex flex-col items-baseline">
      <TheNav transparent={navTransparent} />
      {children}
      <TheFooter />
    </div>
  </>);
};
