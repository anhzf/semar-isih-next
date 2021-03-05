import { useRef } from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import Menu from 'components/Menu';
import Space from 'components/elements/Space';

export default function TheNav({ reveal }) {
  const bgColor = reveal ? 'bg-white' : 'bg-transparent';
  const menuRef = useRef(null);

  return (
    <nav className={`sticky hidden top-0 z-50 w-full px-16 py-2 ${bgColor} sm:flex flex-row flex-nowrap items-center gap-x-8 shadow-md`}>
      <Link href="/">
        <a className="w-14 h-14">
          <img src="/assets/Logo-UNS-Biru.png" alt="Logo UNS"/>
        </a>
      </Link>

      <Space />

      <div className="relative">
        <Button
          label="About"
          className="p-button-text p-button-rounded"
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

      <a href="#terms">
        <Button label="Guidelines" className="p-button-text p-button-rounded" />
      </a>

      <a href="#timeline">
        <Button label="Timeline" className="p-button-text p-button-rounded" />
      </a>

      <a href="#judges">
        <Button label="Judges" className="p-button-text p-button-rounded" />
      </a>

      <a href="#faq">
        <Button label="FAQ" className="p-button-text p-button-rounded" />
      </a>

      <a href="http://bit.ly/SemarIoT2021-register" target="_blank">
        <Button label="Register" className="p-button-rounded p-button-warning" />
      </a>
    </nav>
  );
};
