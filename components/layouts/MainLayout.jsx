import Head from 'next/head';

export default function MainLayout({ children }) {
  return (<>
    <Head>
      <title>SEMAR-ISIH - Sebelas Maret International Student IOT Hackathon</title>
    </Head>

    <div className="relative w-screen min-h-screen flex flex-col items-baseline">
      {children}
    </div>
  </>);
};
