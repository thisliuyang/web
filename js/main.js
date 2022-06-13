window.onscroll = function () {
  this.checkScrollHeightAndLoadAnimation();
};

let num = 300;
var index = 0;
let isShow = {};

function checkScrollHeightAndLoadAnimation() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  let list = document.querySelectorAll(".ic-the");

  let clientRect = list[0].getBoundingClientRect();

  let bottomHight = window.innerHeight - clientRect.top - clientRect.height;

  function addAnimation(index) {
    if (isShow[index] !== true) {
      setTimeout(() => {
        list[index].style.animation = "show 2s forwards"; //添加动画
      }, num * index);
    }

    isShow[index] = true;
  }
  function hideAnimation(index) {
    if (isShow[index] !== false) {
      list[index].style.animation = "hide 1s forwards"; //隐藏动画
    }
    // setTimeout(() => {
    //   list[index].style.animation = "hide 1s forwards"; //隐藏动画
    // }, num * (5 - index) + 100);

    isShow[index] = false;
  }
  if (bottomHight > 200) {
    index = 0;

    addAnimation(index);
  } else {
    hideAnimation(0);
  }

  if (bottomHight > 300) {
    index = 1;

    addAnimation(index);
  } else {
    hideAnimation(1);
  }

  if (bottomHight > 400) {
    index = 2;

    addAnimation(index);
  } else {
    hideAnimation(2);
  }

  if (bottomHight > 500) {
    index = 3;

    addAnimation(index);
  } else {
    hideAnimation(3);
  }

  if (bottomHight > 580) {
    index = 4;

    addAnimation(index);
  } else {
    hideAnimation(4);
  }

  if (bottomHight > 650) {
    index = 5;

    addAnimation(index);
  } else {
    hideAnimation(5);
  }
}
