new WOW().init();
const cards = document.querySelector(".cards");
const cardst = document.querySelector(".cardst");

function createElementsInside(done) {
  var div = document.createElement("div"); // Создаем блок ("<div>")
  // Добавляем в блок текст

  div.setAttribute("class", "cards-childe wow fadeInDownBig visible");
  div.setAttribute("data-content", done);
  div.setAttribute("id", "s" + done);

  document.querySelector(".cardst").appendChild(div);
  var el = document.getElementById("s" + done);

  setTimeout(() => {
    el.classList.remove("visible");
  }, 100);
}

const handler = function () {
  createElementsInside(this.getAttribute("data-content"));
  this.classList.add("hide");
  let target = this,
    parent = target.parentNode,
    targetRect = target.getBoundingClientRect(),
    children = parent.lastElementChild;
  setTimeout(() => {
    if (children === target) {
      parent.removeChild(target);
    } else {
      while (true) {
        if (children === target) {
          parent.removeChild(target);
          break;
        }

        let rect = children.getBoundingClientRect(),
          current = children,
          prevRect = [];

        children = children.previousElementSibling;

        if (!children) {
          break;
        }

        if (children === target) {
          prevRect = targetRect;
        } else {
          prevRect = children.getBoundingClientRect();
        }

        let x = rect.x - prevRect.x;
        if (x < 0) {
          let temp = children.previousElementSibling;
          if (temp) {
            tempRect = temp.getBoundingClientRect();
            x = prevRect.x - tempRect.x;
          } else {
            x = prevRect.width;
          }
        }

        current.style.transition = "none";
        current.style.transform = "translateX(" + x + "px)";

        setTimeout(() => {
          current.style.transition = "";
          current.style.transform = "";
        }, 50);
      }
    }
  }, 150);
  [].forEach.call(cardst.children, (cardt) => {
    cardt.addEventListener("click", handlere);
  });
};

const handlere = function () {
  this.classList.add("hide");
  let target = this,
    parent = target.parentNode,
    targetRect = target.getBoundingClientRect(),
    children = parent.lastElementChild;
  setTimeout(() => {
    if (children === target) {
      parent.removeChild(target);
    } else {
      while (true) {
        if (children === target) {
          parent.removeChild(target);
          break;
        }

        let rect = children.getBoundingClientRect(),
          current = children,
          prevRect = [];

        children = children.previousElementSibling;

        if (!children) {
          break;
        }

        if (children === target) {
          prevRect = targetRect;
        } else {
          prevRect = children.getBoundingClientRect();
        }

        let x = rect.x - prevRect.x;
        if (x < 0) {
          let temp = children.previousElementSibling;
          if (temp) {
            tempRect = temp.getBoundingClientRect();
            x = prevRect.x - tempRect.x;
          } else {
            x = prevRect.width;
          }
        }

        current.style.transition = "none";
        current.style.transform = "translateX(" + x + "px)";

        setTimeout(() => {
          current.style.transition = "";
          current.style.transform = "";
        }, 50);
      }
    }
  }, 150);
  [].forEach.call(cardst.children, (cardt) => {
    cardt.addEventListener("click", handlere);
  });
};

[].forEach.call(cards.children, (card) => {
  card.addEventListener("click", handler);
});
[].forEach.call(cardst.children, (cardt) => {
  cardt.addEventListener("click", handlere);
});
