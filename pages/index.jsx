import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button';
import { HiCheckCircle } from 'react-icons/hi'
import MainLayout from 'components/layouts/MainLayout';
import Section from 'components/blocks/Section';
import TheTimeline from 'components/ui/index/TheTimeline';
import JudgeCard from 'components/ui/index/JudgeCard';
import { about, terms, judges, faqs, organizer } from 'data/content';

const USDFormat = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
const IDRFormat = amount => amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

export default function Home() {
  const [isPrizeVisible, setIsPrizeVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isJudgesVisible, setIsJudgesVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [isOrganizeByVisible, setIsOrganizeByVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);

  return (
    <MainLayout>
      <header
        className="relative w-full"
        style={{ animation: 'hue-rotate 20s infinite' }}
      >
        <article className="w-full h-96 pb-16 sm:pb-4 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-500 flex flex-col justify-end">
          <h1 className="font-bold text-center text-white">
            <span className="block text-4xl sm:text-6xl">
              SEBELAS MARET
            </span>
            <span className="block text-2xl sm:text-5xl">
              INTERNATIONAL IoT CHALLENGE 2021
            </span>
          </h1>
        </article>

        <div className="relative w-full bg-transparent fill-current">
          <svg className="text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
            <path fill="current" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,160C640,181,800,171,960,154.7C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
          </svg>
        </div>
      </header>

      <main className="w-full flex flex-col gap-y-4">
        <Section
          title="About"
          titleClassName={isAboutVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName={isAboutVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          onIntersection={setIsAboutVisible}
          observerOption={{ threshold: .25 }}
        >
          <p className="mx-auto w-full max-w-2xl leading-relaxed">
            {about}
          </p>
        </Section>

        <Section
          title="Terms"
          className="py-10 bg-indigo-50"
          titleClassName={isTermsVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName="mx-auto max-w-5xl"
          onIntersection={setIsTermsVisible}
        >
          <ul className="pb-5 flex flex-col gap-y-1">
            {terms.map((term, i) => (
              <li
                key={i}
                className={`px-2 py-5 bg-white rounded flex flex-row items-center hover:bg-gray-50 animate__animated ${isTermsVisible ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'}`}
                style={{ animationDelay: `.${i * .05}s` }}
              >
                <div className="w-6 h-6 mx-4">
                  <HiCheckCircle className="text-2xl text-green-400" />
                </div>
                <p>{term}</p>
              </li>
            ))}
          </ul>

          <span className={`text-center animate__animated ${isTermsVisible ? 'animate__fadeIn' : 'animate__fadeOut'}`}>For further information, please download the guide book below.</span>

          <a href="http://bit.ly/SemarIoT2021-guidelines" target="_blank" rel="noopener noreferrer" className="self-center">
            <Button label="Download Guidelines" className={`p-button-rounded mt-6 animate__animated ${isTermsVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`} />
          </a>
        </Section>

        <Section
          title="Prize"
          titleClassName={isPrizeVisible ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft'}
          contentClassName="pt-16 flex flex-col md:flex-row flex-wrap justify-center items-end gap-y-4"
          onIntersection={setIsPrizeVisible}
        >
          <svg className="absolute bottom-14 left-3 w-72 h-72 fill-current text-blue-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="current" d="M16.7,-11.5C21.9,10.3,26.3,26.3,14.5,39.5C2.7,52.6,-25.3,63,-45.1,51.2C-64.8,39.3,-76.4,5.4,-67.5,-21.6C-58.7,-48.5,-29.3,-68.5,-11.8,-64.7C5.8,-60.8,11.6,-33.2,16.7,-11.5Z" transform="translate(100 100)" />
          </svg>

          <svg className="absolute top-36 sm:top-11 right-0 sm:right-14 w-60 h-60 fill-current text-yellow-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="current" d="M38.7,-16.4C42,-2.4,30.9,12.5,13,28C-5,43.4,-29.9,59.5,-48.5,49.9C-67.1,40.4,-79.4,5.3,-70.2,-16.8C-61.1,-38.8,-30.5,-47.9,-6.4,-45.8C17.7,-43.7,35.4,-30.5,38.7,-16.4Z" transform="translate(100 100)" />
          </svg>

          <div className={`prize order-1 lg:order-first ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">2nd</h5>
            <span className="my-4 font-medium text-3xl lg:text-5xl text-white">{USDFormat(850)}</span>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </div>

          <div className={`prize order-first lg:order-1 ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">1st</h5>
            <span className="my-4 font-medium text-3xl lg:text-7xl text-white">{USDFormat(1000)}</span>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </div>

          <div className={`prize order-3 ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">3rd</h5>
            <span className="my-4 font-medium text-3xl lg:text-3xl text-white">{USDFormat(700)}</span>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </div>

          <span
            className={`order-last w-full my-10 font-semibold text-center text-3xl bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-500 text-transparent  ${isPrizeVisible && 'animate__animated animate__fadeInUp'}`}
          >
            and, {USDFormat(70)} for each favorite winners
          </span>
        </Section>

        <Section
          title="Timeline"
          className="px-4 pt-10 pb-16 bg-indigo-50"
          titleClassName={isTimelineVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName={isTimelineVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          onIntersection={setIsTimelineVisible}
        >
          <TheTimeline />
        </Section>

        <Section
          title="Judges"
          className="px-0 sm:px-16 pt-10 pb-20"
          contentClassName="overflow-x-auto overflow-y-hidden px-8 pb-28 grid grid-flow-col justify-start gap-x-10"
          titleClassName={isJudgesVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          onIntersection={setIsJudgesVisible}
        >
          {judges.map((judge, i) => (
            <JudgeCard
              key={i}
              name={judge.name}
              imgSrc={judge.photo}
              desc={judge.desc}
              linkedinLink={judge.linkedinUrl}
              className={isJudgesVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
              style={{ animationDelay: `.${i}s` }}
            />
          ))}
        </Section>

        <Section
          title="FAQ"
          className="bg-indigo-50"
          titleClassName={isFaqVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName={`mx-auto max-w-screen-lg animate__animated ${isFaqVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
          onIntersection={setIsFaqVisible}
        >
          <Accordion multiple activeIndex={[]}>
            {faqs.map(faq => (
              <AccordionTab header={faq.title}>
                {faq.body}
              </AccordionTab>
            ))}
          </Accordion>
        </Section>

        <Section
          title="Organized By"
          titleClassName={isOrganizeByVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName="px-20 py-20 flex flex-row flex-wrap justify-center gap-32"
          onIntersection={setIsOrganizeByVisible}
        >
          {organizer.map((e, i) => (
            <img
              src={e}
              className={`w-32 h-32 object-contain animate__animated ${isOrganizeByVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
              style={{ animationDelay: `.${i}s` }}
            />
          ))}
        </Section>
      </main>

    </MainLayout>
  );
};
