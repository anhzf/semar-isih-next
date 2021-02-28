import { Button } from 'primereact/button';

export default function TheNav ({ reveal }) {
  // const elm = useRef();
  const bgColor = reveal ? 'bg-white' : 'bg-transparent';

  return (
    <nav className={`fixed hidden z-50 w-full px-16 py-4 ${bgColor} sm:flex flex-row flex-nowrap justify-end gap-x-8 shadow-md`}>
      <a href="#timeline">
        <Button label="Timeline" className="p-button-text p-button-rounded" />
      </a>

      <a href="#prize">
        <Button label="Prize" className="p-button-text p-button-rounded" />
      </a>

      <a href="#contact">
        <Button label="Contact" className="p-button-text p-button-rounded" />
      </a>

      <a href="#register">
        <Button label="Register" className="p-button-rounded p-button-warning" />
      </a>
    </nav>
  );
};
