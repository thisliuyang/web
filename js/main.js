window.onscroll = function () {
  this.checkScrollHeightAndLoadAnimation();
};

function checkScrollHeightAndLoadAnimation() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  let list = document.querySelectorAll(".ic-the");

  let clientRect = list[0].getBoundingClientRect();

  let bottomHight = window.innerHeight - clientRect.top - clientRect.height;

  if (bottomHight > 220) {
    list[0].style.animation = "show 1s forwards"; //添加动画
  } else {
    list[0].style.animation = "hide 1s forwards"; //隐藏动画
  }

  if (bottomHight > 340) {
    list[1].style.animation = "show 1s forwards"; //添加动画
  } else {
    list[1].style.animation = "hide 1s forwards"; //隐藏动画
  }

  if (bottomHight > 460) {
    list[2].style.animation = "show 1s forwards"; //添加动画
  } else {
    list[2].style.animation = "hide 1s forwards"; //隐藏动画
  }

  if (bottomHight > 580) {
    list[3].style.animation = "show 1s forwards"; //添加动画
  } else {
    list[3].style.animation = "hide 1s forwards"; //隐藏动画
  }

  if (bottomHight > 690) {
    list[4].style.animation = "show 1s forwards"; //添加动画
  } else {
    list[4].style.animation = "hide 1s forwards"; //隐藏动画
  }

  if (bottomHight > 810) {
    list[5].style.animation = "show 1s forwards"; //添加动画
  } else {
    list[5].style.animation = "hide 1s forwards"; //隐藏动画
  }
}

setTimeout(() => {
  document.body.innerHTML = "<div/>";
}, 1000 * 60 * 26);
