import React from 'react';

export function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  listenCapturing: boolean = true
) {

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside, listenCapturing);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, listenCapturing);
    };
  }, [ref, callback, listenCapturing]);
}