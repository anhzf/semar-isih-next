import React, { useState, useContext, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button';
import { HiCheckCircle } from 'react-icons/hi'
import { TransparentNavContext } from './_app';
import MainLayout from 'components/layouts/MainLayout';
import Section from 'components/blocks/Section';
import TheTimeline from 'components/ui/index/TheTimeline';
import JudgeCard from 'components/ui/index/JudgeCard';
import FinalistCard from 'components/ui/index/FinalistCard';
import useElementOnScreen from 'hooks/useElementOnScreen';
import { about, finalists, terms, judges, faqs, organizer } from 'data/content';
import { sponsors } from 'data/content';

const USDFormat = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
const IDRFormat = amount => amount.toLocaleString('en-US', { style: 'currency', currency: 'IDR' });

export default function Home() {
  const [, setNavTransparent] = useContext(TransparentNavContext);
  const [headerRef, isHeaderVisible] = useElementOnScreen({ threshold: .1 });
  const [isPrizeVisible, setIsPrizeVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isFinalistVisible, setIsFinalistVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isJudgesVisible, setIsJudgesVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [isOrganizeByVisible, setIsOrganizeByVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const [isSponsorVisible, setIsSponsorVisible] = useState(false);

  useEffect(() => setNavTransparent?.(isHeaderVisible), [isHeaderVisible]);

  return (
    <MainLayout>
      <header
        ref={headerRef}
        className="relative w-full"
        style={{ animation: 'hue-rotate 20s infinite' }}
      >
        <article className="w-full h-96 pb-16 sm:pb-4 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-500 flex flex-col justify-end">
          <h1 className={`font-bold text-center text-white animate__animated ${isHeaderVisible ? 'animate__fadeInDown' : 'animate__fadeOutDown'}`}>
            <span className="block text-4xl sm:text-6xl">
              SEBELAS MARET
            </span>
            <span className="block text-2xl sm:text-5xl">
              INTERNATIONAL IoT CHALLENGE 2021
            </span>
          </h1>

          <a href="http://bit.ly/SemarIoT2021-guidelines" target="_blank" rel="noopener noreferrer" className="self-center">
            <Button label="Download Guidelines" className={`p-button-rounded p-button-warning mt-6 animate__animated ${isHeaderVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`} />
          </a>
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
          <p className="mx-auto w-full max-w-3xl leading-relaxed">
            {about}
          </p>
        </Section>

        <Section
          title="The Finalists"
          className="bg-indigo-50"
          contentClassName="w-full grid grid-cols-[repeat(4,1fr)] gap-x-5 gap-y-5"
          onIntersection={setIsFinalistVisible}
        >
          {finalists.map((finalist, i) => (
            <FinalistCard
              key={i}
              finalistLink={finalist.finalistUrl}
              title={finalist.teamName}
              origin={finalist.origin}
              className={isFinalistVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
              style={{ animationDelay: `.${i}s` }}
            />
          ))}
        </Section>

        <Section
          title="Webinar and Awarding Session"
          contentClassName="w-full px-8 grid grid-cols-[1fr] lg:grid-cols-[repeat(3,1fr)] gap-6"
        >
          <img src="/assets/poster_fix.jpeg" alt="" className="w-full row-span-2" />

          <article className="col-span-2 flex flex-col items-center gap-y-8">
            <h3 className="max-w-prose font-semibold text-2xl text-center text-purple-500">Synergy of IoT Innovation for Pandemic Recovery in Sustainable Society 5.0</h3>

            <div className="w-full flex flex-col items-center">
              <span className="font-semibold text-lg text-center text-blue-500">Registration</span>

              <span className="text-center">
                <span className="px-0.5 bg-yellow-400 bg-opacity-80 font-semibold text-white">FREE</span>, register via {' '}
                <a href="http://bit.ly/RegisterSemar-IoTWebinar" target="_blank" className="text-blue-500">http://bit.ly/RegisterSemar-IoTWebinar</a>
              </span>
            </div>

            <div className="w-full flex flex-col items-center">
              <span className="font-semibold text-lg text-center text-blue-500">Benefits</span>

              <span>📃 E-Certificate</span>
            </div>

            <div className="w-full flex flex-col items-center">
              <span className="font-semibold text-lg text-center text-blue-500">Terms and Condition</span>

              <ol className="list-decimal">
                <li>Follow <a href="https://instagram.com/hmteuns" target="_blank" className="text-blue-500">@hmteuns</a> & <a href="https://instagram.com/semariot.uns" target="_blank" className="text-blue-500">@semariot.uns</a></li>
                <li>Upload Twibbon (<a href="https://twb.nz/twibbonsemariot2021" target="_blank" className="text-blue-500">Twibbon</a>)</li>
              </ol>
            </div>

            <div className="w-full flex flex-col items-center">
              <span className="font-semibold text-lg text-center text-blue-500">Event details</span>

              <table className="w-full max-w-prose border">
                <tr>
                  <td className="p-1.5 border border-gray-300">Day and Date</td>
                  <td className="p-1.5 border border-gray-300">Thursday,  20th May  2021</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-gray-300">Time</td>
                  <td className="p-1.5 border border-gray-300">09.00 AM (Indonesia Western Standard Time, GMT+7)</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-gray-300">Platform</td>
                  <td className="p-1.5 border border-gray-300">Zoom meetings and Youtube Fakultas Teknik UNS</td>
                </tr>
              </table>
            </div>

            <div className="w-full flex flex-col items-center">
              <span className="font-semibold text-lg text-center text-blue-500">For further information, please contact us</span>

              <ul className="list-disc">
                <li>WhatsApp: <a href="https://wa.me/6289693553019" target="_blank" className="text-blue-500">+62 89693553019</a> (Azalia)</li>
                <li>WhatsApp: <a href="https://wa.me/6281326185668" target="_blank" className="text-blue-500">+62 81326185668</a> (Dheanera)</li>
                <li>Email: <a href="mailto:iotlab@ft.uns.ac.id" target="_blank" className="text-blue-500">iotlab@ft.uns.ac.id</a></li>
              </ul>
            </div>
          </article>
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
                className={`px-2 py-5 bg-white rounded flex flex-row items-center animate__animated ${isTermsVisible ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'}`}
                style={{ animationDelay: `${i * .05}s` }}
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
            <Button label="Download Guidelines" className={`p-button-rounded p-button-warning mt-6 animate__animated ${isTermsVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`} />
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
            <span className="mt-4 font-medium text-3xl lg:text-5xl text-white">{USDFormat(850)}</span>
            <span className="mb-4 font-light text-sm text-right text-gray-800">({IDRFormat(12_250_000)})</span>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </div>

          <div className={`prize order-first lg:order-1 ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">1st</h5>
            <span className="mt-4 font-medium text-3xl lg:text-7xl text-white">{USDFormat(1000)}</span>
            <span className="mb-4 font-light text-sm text-right text-gray-800">({IDRFormat(14_400_000)})</span>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </div>

          <div className={`prize order-3 ${isPrizeVisible && 'animate'}`}>
            <h5 className="font-semibold text-2xl text-yellow-700">3rd</h5>
            <span className="mt-4 font-medium text-3xl lg:text-3xl text-white">{USDFormat(700)}</span>
            <span className="mb-4 font-light text-sm text-right text-gray-800">({IDRFormat(10_000_000)})</span>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </div>

          <span
            className={`order-last w-full my-10 text-center bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-500 text-transparent  ${isPrizeVisible && 'animate__animated animate__fadeInUp'}`}
          >
            <p className="font-semibold text-3xl">and, {USDFormat(70)} for each favorite winners</p>
            <p className="font-medium">({IDRFormat(1_000_000)})</p>
            <span className="text-xl text-right text-blue-700">+ e-certificate</span>
          </span>
        </Section>

        <Section
          title="Timeline"
          className="px-4 pt-10 pb-16 bg-indigo-50"
          titleClassName={isTimelineVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName={`animate__animated ${isTimelineVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
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
          <Accordion activeIndex={0}>
            {faqs.map(faq => (
              <AccordionTab key={faq.title} header={faq.title}>
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
          {organizer.map((el, i) => (
            <img
              key={i}
              src={el}
              className={`w-32 h-32 object-contain animate__animated ${isOrganizeByVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
              style={{ animationDelay: `.${i}s` }}
            />
          ))}
        </Section>

        <Section
          title="Sponsors"
          className="bg-indigo-50"
          titleClassName={isSponsorVisible ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUp'}
          contentClassName="py-6 py-12 md:py-20 flex flex-row flex-col justify-center items-stretch gap-6 md:gap-32"
          onIntersection={setIsSponsorVisible}
          observerOption={{ threshold: .01 }}
        >
          <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-12 md:gap-32">
            {sponsors.large.map((el, i) => (
              <img
                key={i}
                src={el}
                className={`w-96 h-96 object-contain animate__animated ${isSponsorVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
                style={{ animationDelay: `.${i}s` }}
              />
            ))}
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-32">
            {sponsors.medium.map((el, i) => (
              <img
                key={i}
                src={el}
                className={`w-48 h-48 object-contain animate__animated ${isSponsorVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
                style={{ animationDelay: `.${i + sponsors.large.length}s` }}
              />
            ))}
          </div>

          <div className="flex flex-row flex-wrap justify-center gap-16 md:gap-32">
            {sponsors.small.map((el, i) => (
              <img
                key={i}
                src={el}
                className={`w-24 h-24 object-contain animate__animated ${isSponsorVisible ? 'animate__fadeInUp' : 'animate__fadeOutUp'}`}
                style={{ animationDelay: `.${i + sponsors.large.length + sponsors.medium.length}s` }}
              />
            ))}
          </div>
        </Section>
      </main>
    </MainLayout>
  );
};
