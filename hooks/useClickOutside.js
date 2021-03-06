import React from 'react';

// copied from https://www.30secondsofcode.org/react/s/use-click-outside
export default function useClickOutside(ref, callback) {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
