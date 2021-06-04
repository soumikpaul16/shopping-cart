const focusFirstInteractiveEl = (e) => {
  e.current
    .querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
    )[0]
    ?.focus();
};

export default focusFirstInteractiveEl;
