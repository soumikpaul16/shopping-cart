import { useEffect, useState } from 'react';

const useFocusTrap = (eRef) => {
  const [elRef, setElRef] = useState(eRef);
  const handleFocus = (e) => {
    const focusableEls = elRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
    );
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    elRef?.current?.addEventListener('keydown', handleFocus);

    return () => {
      elRef?.current?.removeEventListener('keydown', handleFocus);
    };
  }, [elRef]);

  return setElRef;
};

export default useFocusTrap;
