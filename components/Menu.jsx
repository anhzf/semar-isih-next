import useClickOutside from 'hooks/useClickOutside';
import React, { useState, useCallback, useRef, useImperativeHandle } from 'react';

const Menu = React.forwardRef(function ({
  stateHandler: [visible, setVisible] = useState(false),
  children,
}, ref) {
  const menuRef = useRef(null);
  const [[x, y], setPos] = useState([0, 0]);
  const toggle = useCallback(
    e => {
      setVisible(!visible);
      const { bottom = 0, left = 0 } = e?.target?.getBoundingClientRect?.() || {};

      setPos([bottom, left]);
    },
    [visible],
  );

  useImperativeHandle(
    ref,
    () => ({ toggle }),
    [visible],
  );

  useClickOutside(menuRef, toggle);

  return (
    visible && (
      <div
        ref={menuRef}
        className="fixed top-0 left-0 rounded-lg border shadow-lg animate__animated animate__bounceIn animate__faster"
        style={{
          top: `${x}px`,
          left: `${y}px`
        }}
      >
        <ul className="relative flex flex-col">
          {children}
        </ul>
      </div>)
  );
});

const Item = function ({
  children,
}) {
  return (
    <li className="cursor-pointer px-5 py-4 bg-white text-gray-800 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100">{children}</li>
  );
};

export default Object.assign(Menu, {
  Item,
});
