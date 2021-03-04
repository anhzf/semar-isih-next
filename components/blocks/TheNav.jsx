import { useMemo, useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

export default function TheNav({ reveal }) {
  const bgColor = reveal ? 'bg-white' : 'bg-transparent';
  const menuRef = useRef(null);
  const aboutDropdownItems = useMemo(() => [
    {
      label: 'About the event',
      command(e) {
        menuRef.current.hide(e);
        window.location.assign('/#about');
      },
    },
    {
      label: 'About UNS',
      url: '/about-uns',
    },
  ]);

  return (
    <nav className={`sticky hidden top-0 z-50 w-full px-16 py-4 ${bgColor} sm:flex flex-row flex-nowrap justify-end gap-x-8 shadow-md`}>
      <div>
        <Menu
          model={aboutDropdownItems}
          id="popup_menu"
          ref={menuRef}
          popup
        />
        <Button
          label="About"
          className="p-button-text p-button-rounded"
          onClick={e => menuRef.current.toggle(e)}
          aria-controls="popup_menu"
          aria-haspopup
        />
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

      <a href="https://example.com" target="_blank">
        <Button label="Register" className="p-button-rounded p-button-warning" />
      </a>
    </nav>
  );
};
