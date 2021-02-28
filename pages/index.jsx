import MainLayout from 'components/layouts/MainLayout';
import TheFooter from 'components/ui/index/TheFooter';
import TheTimeline from 'components/ui/index/TheTimeline';

const Section = ({ title, children, className, ...props }) => (
  <section id={title.toLowerCase()} className="w-full px-16" {...props}>
    <h3 className="mt-4 my-10 font-medium text-4xl text-center text-blue-500">{title}</h3>

    <article className={`w-full py-4 ${className || 'flex flex-col justify-center'}`}>
      {children}
    </article>
  </section>
);

export default function Home() {
  return (
    <MainLayout>
      <header className="relative w-full">
        <article className="w-full h-96 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-500 flex flex-col justify-end">
          <h1 className="font-bold text-7xl text-center text-white">SEMAR - ISIH</h1>
          <h2 className="font-medium text-2xl text-center text-white">Sebelas Maret International Student IOT Hackathon 2021</h2>
        </article>

        <svg className="w-full bg-transparent fill-current text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path fill="current" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </header>

      <main className="mt-36 w-full flex flex-col gap-y-40">
        <Section title="Tema">
          <blockquote className="font-semibold text-2xl text-center">"IoT Innovation for Covid-19 pandemic recovery"</blockquote>
        </Section>

        <Section title="Timeline">
          <TheTimeline />
        </Section>

        <Section title="Prize" className="pt-16 flex flex-row justify-around items-end">
          <div className="cursor-pointer bg-blue-400 rounded-md shadow-md p-6 flex flex-col hover:bg-gray-300">
            <h5 className="font-semibold text-2xl text-white">2nd</h5>
            <span className="my-4 font-medium text-5xl text-blue-900">{(850).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>

          <div className="cursor-pointer bg-yellow-400 rounded-md shadow-md p-6 flex flex-col hover:bg-yellow-300">
            <h5 className="font-semibold text-2xl text-white">1st</h5>
            <span className="my-4 font-medium text-7xl text-yellow-900">{(1000).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>

          <div className="cursor-pointer bg-white rounded-md shadow-md p-6 flex flex-col hover:bg-gray-100">
            <h5 className="font-semibold text-2xl text-gray-900">3rd</h5>
            <span className="my-4 font-medium text-3xl text-yellow-400">{(700).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
        </Section>

        <Section title="Register">
          <a href="https://somelink.com" target="_blank" className="text-center hover:underline">https://somelink.com</a>
        </Section>

        <Section title="Organized By" className="px-20 py-20 flex flex-row flex-wrap justify-center gap-32">
          <img src="/assets/1519889957811.png" className="w-32 h-32 object-contain" />
          <img src="/assets/chiba_university_logo_resized.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Logo-Dies-UNS.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Logo-UNS-Biru.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Logo-hmte.png" className="w-32 h-32 object-contain" />
          <img src="/assets/1462853_logo_1572951228_n.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Arms_of_KMITL.png" className="w-32 h-32 object-contain" />
        </Section>
      </main>

      <TheFooter />
    </MainLayout>
  );
};
