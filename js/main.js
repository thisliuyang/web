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

function addEvent(index) {
  document.getElementById("fold_hg" + index).onclick = function (ev) {
    let tag = ev.target,
      fold_hg = document.getElementById(`fold_hg` + index),
      vm = document.getElementById(`box` + index);
    icon = document.getElementById(`question-item-icon` + index);

    if (fold_hg == null || vm == null) return;

    var vmHeight = vm.getBoundingClientRect().height;

    if (fold_hg.offsetHeight == 72) {
      fold_hg.style.height = vmHeight + tag.offsetHeight + "px";
      fold_hg.classList.add("question-item-active");
      icon.classList.add("question-icon-active");
    } else {
      fold_hg.style.height = 72 + "px";
      fold_hg.classList.remove("question-item-active");
      icon.classList.remove("question-icon-active");
    }
  };
}

addEvent(1);
addEvent(2);
addEvent(3);
addEvent(4);

var $c = function (array) {
  var nArray = [];
  for (var i = 0; i < array.length; i++) nArray.push(array[i]);
  return nArray;
};
Array.prototype.each = function (func) {
  for (var i = 0, l = this.length; i < l; i++) {
    func(this[i], i);
  }
};
document.getElementsByClassName = function (cn) {
  var hasClass = function (w, Name) {
    var hasClass = false;
    w.className.split(" ").each(function (s) {
      if (s == Name) hasClass = true;
    });
    return hasClass;
  };
  var elems = document.getElementsByTagName("*") || document.all;
  var elemList = [];
  $c(elems).each(function (e) {
    if (hasClass(e, cn)) {
      elemList.push(e);
    }
  });
  return $c(elemList);
};
function change_bg(obj) {
  console.log('obj :>> ', obj);
  var a = document.getElementsByClassName("menu")[0].getElementsByTagName("a");
  for (var i = 0; i < a.length; i++) {
    a[i].className = "";
  }
  obj.className = "active";
}
