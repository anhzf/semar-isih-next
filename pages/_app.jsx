import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'animate.css';
import 'styles/globals.css';
import 'styles/prime-theme.css';
import 'tailwindcss/tailwind.css';
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

export const TransparentNavContext = React.createContext([]);

function MyApp({ Component, pageProps }) {
  const [navTransparent, setNavTransparent] = useState(false);

  return (
    <TransparentNavContext.Provider value={[navTransparent, setNavTransparent]}>
      <Component {...pageProps} />
    </TransparentNavContext.Provider>
  );
}

export default MyApp
