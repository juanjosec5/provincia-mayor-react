export const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }
}

export const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);