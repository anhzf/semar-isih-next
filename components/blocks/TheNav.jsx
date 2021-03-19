import { useRef } from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { HiMenu } from 'react-icons/hi';
import Menu from 'components/Menu';
import Space from 'components/elements/Space';

export default function TheNav({ transparent }) {
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  return (
    <>
      <nav className={`fixed hidden top-0 z-50 w-full px-16 py-2 ${transparent ? 'navbar-transparent bg-transparent' : 'bg-white shadow-md'} sm:flex flex-row flex-nowrap items-center gap-x-8`}>
        <Link href="/">
          <a className="relative w-14 h-14">
            <img
              src="/assets/LOGO-SEMAR-IOT_no-text.png"
              alt="Logo Semar IOT"
            />
          </a>
        </Link>

        <Space />

        <div className="relative">
          <Button
            label="About"
            className="p-button-text p-button-rounded text-white"
            onClick={e => menuRef.current.toggle(e)}
            aria-controls="popup_menu"
            aria-haspopup
          />
          <Menu ref={menuRef}>
            <Menu.Item>
              <Link href="/#about">
                <a>About the Events</a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/about-uns">
                <a>About UNS</a>
              </Link>
            </Menu.Item>
          </Menu>
        </div>

        <a href="/#terms">
          <Button label="Guidelines" className="p-button-text p-button-rounded" />
        </a>

        <a href="/#timeline">
          <Button label="Timeline" className="p-button-text p-button-rounded" />
        </a>

        <a href="/#judges">
          <Button label="Judges" className="p-button-text p-button-rounded" />
        </a>

        <a href="/#faq">
          <Button label="FAQ" className="p-button-text p-button-rounded" />
        </a>

        <a href="http://bit.ly/SemarIoT2021-register" target="_blank">
          <Button label="Register" className="p-button-rounded p-button-warning" />
        </a>
      </nav>

      <nav className="fixed sm:hidden top-0 right-0 z-50 px-6 py-4">
        <div className="relative">
          <button
            className="p-3 bg-white rounded-full shadoow"
            onClick={e => mobileMenuRef.current.toggle(e)}
          >
            <HiMenu className="text-2xl text-purple-700" />
          </button>

          <Menu ref={mobileMenuRef} offset={[-80, 0]}>
            <Menu.Item>
              <Link href="/#about">
                <a>About the Events</a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/about-uns">
                <a>About UNS</a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <a href="/#terms">Guidelines</a>
            </Menu.Item>

            <Menu.Item>
              <a href="/#timeline">Timeline</a>
            </Menu.Item>

            <Menu.Item>
              <a href="/#judges">Judges</a>
            </Menu.Item>

            <Menu.Item>
              <a href="/#faq">FAQ</a>
            </Menu.Item>

            <Menu.Item>
              <a href="http://bit.ly/SemarIoT2021-register" target="_blank">Register</a>
            </Menu.Item>
          </Menu>
        </div>
      </nav>
    </>
  );
};
