import React from 'react';
import Head from 'next/head';
import TheNav from 'components/blocks/TheNav';
import TheFooter from 'components/blocks/TheFooter';

export default function MainLayout({ children }) {
  return (<>
    <Head>
      <title>SEBELAS MARET INTERNATIONAL IoT CHALLENGE 2021</title>
    </Head>

    <div className="dark relative w-full min-h-screen bg-yellow-50 flex flex-col items-baseline">
      <TheNav reveal />

      {children}
      <TheFooter />
    </div>
  </>);
};
