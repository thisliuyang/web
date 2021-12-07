window.onscroll = function () {
  var scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  console.log("滚动距离" + scrollTop);

  var scrollingContainer = document.querySelector(
    ".main-horiztonal-scrolling-container"
  );

  console.log(
    "scrollingContainer.clientHeight :>> ",
    scrollingContainer.clientHeight
  );
  var t = scrollingWrapper.getBoundingClientRect().top;

  console.log("t :>> ", t);

  var percent = Math.abs(t) / scrollingContainer.clientHeight;

  console.log("percent :>> ", percent);
  var r = horizontal.clientWidth * percent;

  if (t == -scrollingContainer.clientHeight * (2/3)) {
    console.log("ttttt :>> ", t);
  }

  const rAF =
    window.requestAnimationFrame || ((func) => setTimeout(func, 16));
  const frameFunc = () => {
    if (t < 0 && t > -scrollingContainer.clientHeight * (2/3)) {
      console.log("horizontal :>> ", horizontal);
      horizontal.style.cssText = `
        transform: translate3d(-${r}px, 0px, 0px);`;
    }
    if (t > 0) {
      horizontal.style.cssText = `
        transform: translate3d(-${0}px, 0px, 0px);`;
    }
    if (t <= -scrollingContainer.clientHeight * (2/3)) {
      horizontal.style.cssText = `
        transform: translate3d(-${
          horizontal.clientWidth * (2/3)
        }px, 0px, 0px);`;
    }
  };
  rAF(frameFunc);
};

// setTimeout(() => {
//   document.body.innerHTML = '<div/>'
// },4000)