function percVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  const left = Math.max(rect.left, 0);
  const right = Math.min(rect.right, windowWidth);
  const bottom = Math.min(rect.bottom, windowHeight);
  const top = Math.max(rect.top, 0);

  if (left < right && bottom > top) {
    return (right - left) * (bottom - top) / ((rect.right - rect.left) * (rect.bottom - rect.top));
  }
  return 0;
}
