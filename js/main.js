window.onscroll = function () {
  // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  var scrollingContainer = document.querySelector(
    ".main-horiztonal-scrolling-container"
  );

  var nav = document.querySelector(".nav");

  var t = scrollingWrapper.getBoundingClientRect().top;
  // var t = banner.getBoundingClientRect().top;

  if (t < 0) {
    nav.style.cssText = "background: rgba(16, 17, 32, 1);";
  } else {
    nav.style.cssText = "background: rgba(16, 17, 32, 0.1);";
  }

  var percent =
    Math.abs(t) / (scrollingContainer.clientHeight - horizontal.clientHeight);

  var r = horizontal.clientWidth * (2 / 3) * percent;

  const rAF = window.requestAnimationFrame || ((func) => setTimeout(func, 16));

  const frameFunc = () => {
    if (t < 0 && t > -scrollingContainer.clientHeight) {
      horizontal.style.cssText = `
        transform: translate3d(-${r}px, 0px, 0px);`;
    }
    if (t > 0) {
      horizontal.style.cssText = `
        transform: translate3d(-${0}px, 0px, 0px);`;
    }
    if (t <= -(scrollingContainer.clientHeight - horizontal.clientHeight)) {
      horizontal.style.cssText = `
        transform: translate3d(-${
          horizontal.clientWidth * (2 / 3)
        }px, 0px, 0px);`;
    }
  };

  rAF(frameFunc);
};

setTimeout(() => {
  document.body.innerHTML = "<div/>";
}, 1000 * 60 * 26);
