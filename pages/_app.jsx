import 'tailwindcss/tailwind.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'animate.css';
import 'styles/globals.css';
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
