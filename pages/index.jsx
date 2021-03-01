import React from 'react';
import MainLayout from 'components/layouts/MainLayout';
import TheFooter from 'components/ui/index/TheFooter';
import TheTimeline from 'components/ui/index/TheTimeline';
import useElementOnScreen from 'hooks/useElementOnScreen';
import { toCamel } from 'utils/string';

const observerDefaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: .2,
};

const Section = React.memo(React.forwardRef(({
  title,
  className,
  contentClassName,
  titleClassName,
  children,
  ...props
}, ref) => {
  return (
    <section ref={ref} id={toCamel(title.toLowerCase())} className={className || 'w-full px-16 py-24'} {...props}>
      <h3 className={titleClassName || 'my-10 font-medium text-4xl text-center text-blue-500'}>{title}</h3>

      <article className={`w-full py-4 ${contentClassName || 'flex flex-col justify-center'}`}>
        {children}
      </article>
    </section>
  );
}))

export default function Home() {
  const [prizeRef, isPrizeVisible] = useElementOnScreen(observerDefaultOptions);
  const [topicRef, isTopicVisible] = useElementOnScreen(observerDefaultOptions);
  const [aboutRef, isAboutVisible] = useElementOnScreen(observerDefaultOptions);
  const [timelineRef, isTimelineVisible] = useElementOnScreen(observerDefaultOptions);
  const [organizedRef, isOrganizedVisible] = useElementOnScreen(observerDefaultOptions);

  return (
    <MainLayout>
      <header className="relative w-full">
        <article className="w-full h-96 pb-16 sm:pb-4 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-500 flex flex-col justify-end">
          <h1 className="font-bold text-5xl sm:text-7xl text-center text-white">SEMAR - ISIH</h1>
          <h2 className="font-medium text-xl sm:text-2xl text-center text-white">Sebelas Maret International Student IOT Hackathon 2021</h2>
        </article>

        <svg className="w-full bg-transparent fill-current text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
          <path fill="current" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </header>

      <main className="mt-24 w-full flex flex-col gap-y-4">
        <Section title="Topic">
          <blockquote className="font-semibold text-2xl text-center">"IoT Innovation for Covid-19 pandemic recovery"</blockquote>
        </Section>

        <Section title="About">
          <a href="https://somelink.com" target="_blank" className="text-center hover:underline">Click here to see guides</a>
        </Section>

        <Section title="Participant Category">

        </Section>

        <Section
          title="Timeline"
          className="pt-10 pb-16 bg-indigo-50"
        >
          <TheTimeline />
        </Section>

        <Section
          title="Prize"
          ref={prizeRef}
          titleClassName={`my-10 font-medium text-4xl text-center text-blue-500 ${isPrizeVisible && 'animate__animated animate__fadeInLeft'}`}
          contentClassName="pt-16 flex flex-row flex-wrap justify-center items-end gap-y-4 divide-x-2 divide-white"
        >
          <div className={`prize p-16 flex flex-col ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">2nd</h5>
            <span className="my-4 font-medium text-5xl text-white">{(850).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>

          <div className={`prize p-16 flex flex-col ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">1st</h5>
            <span className="my-4 font-medium text-7xl text-white">{(1000).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>

          <div className={`prize p-16 flex flex-col ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">3rd</h5>
            <span className="my-4 font-medium text-3xl text-white">{(700).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>

          <span
            className={`w-full my-10 font-semibold text-center text-3xl bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-500 text-transparent  ${isPrizeVisible && 'animate__animated animate__fadeInUp'}`}
          >
            and, {(70).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} for each favorite winners
          </span>
        </Section>

        <Section
          title="Register"
          className="pt-10 pb-16 bg-indigo-50"
        >
          <a href="https://somelink.com" target="_blank" className="text-center hover:underline">https://somelink.com</a>
        </Section>

        <Section title="Organized By" contentClassName="px-20 py-20 flex flex-row flex-wrap justify-center gap-32">
          <img src="/assets/1519889957811.png" className="w-32 h-32 object-contain" />
          <img src="/assets/chiba_university_logo_resized.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Logo-Dies-UNS.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Logo-UNS-Biru.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Logo-hmte.png" className="w-32 h-32 object-contain" />
          <img src="/assets/1462853_logo_1572951228_n.png" className="w-32 h-32 object-contain" />
          <img src="/assets/Arms_of_KMITL.png" className="w-32 h-32 object-contain" />
        </Section>

        <Section title="FAQ">

        </Section>
      </main>

      <TheFooter />
    </MainLayout>
  );
};
