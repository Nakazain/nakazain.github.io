const modal = document.getElementById("modal");
const openModalWeb = document.getElementById("web-project");
const openModalOther = document.getElementById("other-project");
const closeModalBtn = document.getElementById("close-modal");
const sideModal = document.getElementById("container-side");
const centerModalWeb = document.getElementById("container-center-web");
const centerModalOther = document.getElementById("container-center-other");
const btnWeb1 = document.getElementById("web-button-1");
const btnWeb2 = document.getElementById("web-button-2");
const btnWeb3 = document.getElementById("web-button-3");
const btnOther1 = document.getElementById("prjk-button-1");
const btnOther2 = document.getElementById("prjk-button-2");
const btnOther3 = document.getElementById("prjk-button-3");
const contentWeb1 = document.getElementById("web-content-1");
const contentWeb2 = document.getElementById("web-content-2");
const contentWeb3 = document.getElementById("web-content-3");
const contentOther1 = document.getElementById("other-content-1");
const contentOther2 = document.getElementById("other-content-2");
const contentOther3 = document.getElementById("other-content-3");
const contentModal = document.querySelectorAll(".content-modal");
const modalSides = document.querySelectorAll(".modal-side");
const sideText = document.querySelectorAll(".side-text");
const sideWeb = document.getElementById("side-web");
const sideOther = document.getElementById("side-other");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function  showContentWeb(contentId, btnId) {
  setTimeout(() => {
    contentId.classList.remove("hidden");
    setTimeout(() => {
      contentId.classList.remove("opacity-0");
      contentId.classList.add("opacity-100");
      btnId.classList.add("font-bold");
    }, 200);
  }, 50);
}

function hideContentWeb(contentId, btnId) {
  btnId.classList.remove("font-bold");
  contentId.classList.remove("opacity-100");
  contentId.classList.add("opacity-0");
  setTimeout(() => {
    contentId.classList.add("hidden");
  }, 50);
}


function openModal(centerModal, contentModal, contentId) {
  modal.classList.remove("hidden");
  centerModal.classList.remove("hidden");
  contentId.classList.remove("hidden");
  sideModal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  }, 100);

  setTimeout(() => {
    sideModal.classList.remove("opacity-0", "w-0");
    sideModal.classList.add("opacity-100", "w-2/6");
  }, 500);
  setTimeout(() => {
    centerModal.classList.remove("opacity-0", "w-0");
    centerModal.classList.add("opacity-100", "w-1/4");
  }, 700);
  setTimeout(() => {
    sideModal.classList.remove("w-2/6");
    sideModal.classList.add("w-20");
  }, 2200);

  modalSides.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("opacity-0", "-translate-x-4");
      el.classList.add("opacity-100", "translate-x-0");
    }, 700 + index * 200);
  });

  sideText.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("text-[0px]", "opacity-0");
    }, 2000);
  });

  setTimeout(() => {
    contentId.classList.remove("opacity-0");
    contentId.classList.add("opacity-100");
  }, 1000);
}


openModalOther.addEventListener("click", function () {
  modal.classList.remove("hidden");
  centerModalOther.classList.remove("hidden");
  contentOther1.classList.remove("hidden");
  sideModal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  }, 100);

  setTimeout(() => {
    sideModal.classList.remove("opacity-0", "w-0");
    sideModal.classList.add("opacity-100", "w-2/6");
  }, 500);
  setTimeout(() => {
    centerModalOther.classList.remove("opacity-0", "w-0");
    centerModalOther.classList.add("opacity-100", "w-1/4");
  }, 700);
  setTimeout(() => {
    sideModal.classList.remove("w-2/6");
    sideModal.classList.add("w-20");
  }, 2200);

  modalSides.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("opacity-0", "-translate-x-4");
      el.classList.add("opacity-100", "translate-x-0");
    }, 700 + index * 200);
  });
  sideText.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("text-[0px]", "opacity-0");
    }, 2000);
  });
  setTimeout(() => {
    contentOther1.classList.remove("opacity-0");
    contentOther1.classList.add("opacity-100");
  }, 1000);
});

openModalWeb.addEventListener("click", function () {
  openModal(centerModalWeb, contentModal, contentWeb1);
});

openModalOther.addEventListener("click", function () {
  openModal(centerModalOther, contentModal, contentOther1);
});

closeModalBtn.addEventListener("click", function () {
  sideModal.classList.remove("opacity-100", "w-20");
  sideModal.classList.add("opacity-0", "w-0", "hidden");

  centerModalWeb.classList.remove("opacity-100", "w-1/4");
  centerModalWeb.classList.add("opacity-0", "w-0", "hidden");
  centerModalOther.classList.remove("opacity-100", "w-1/4");
  centerModalOther.classList.add("opacity-0", "w-0", "hidden");

  modalSides.forEach((el) => {
    el.classList.add("opacity-0", "-translate-x-4");
    el.classList.remove("opacity-100", "translate-x-0");
  });
  sideText.forEach((el) => {
    el.classList.remove("text-[0px]", "opacity-0");
  });

  contentModal.forEach((el) => {
    el.classList.remove("opacity-100");
    el.classList.add("opacity-0", "hidden");
  });

  // Reset all button states
  btnWeb1.classList.remove("font-bold");
  btnWeb2.classList.remove("font-bold");
  btnWeb3.classList.remove("font-bold");
  btnOther1.classList.remove("font-bold");
  btnOther2.classList.remove("font-bold");
  btnOther3.classList.remove("font-bold");

  modal.classList.remove("opacity-100", "scale-100");
  modal.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
});

btnWeb1.addEventListener("click", function () {
  if (contentWeb2.classList.contains("opacity-100")) {
    hideContentWeb(contentWeb2, btnWeb2);
  }
  if (contentWeb3.classList.contains("opacity-100")) {
    hideContentWeb(contentWeb3, btnWeb3);
  }
  showContentWeb(contentWeb1, btnWeb1);
});

btnWeb2.addEventListener("click", function () {
  if (contentWeb1.classList.contains("opacity-100")) {
    hideContentWeb(contentWeb1, btnWeb1);
  }
  if (contentWeb3.classList.contains("opacity-100")) {
    hideContentWeb(contentWeb3, btnWeb3); 
  }
showContentWeb(contentWeb2, btnWeb2);
});

btnWeb3.addEventListener("click", function () {
  if (contentWeb1.classList.contains("opacity-100")) {
    hideContentWeb(contentWeb1, btnWeb1);
  }
  if (contentWeb2.classList.contains("opacity-100")) {
    hideContentWeb(contentWeb2, btnWeb2);
  }
  showContentWeb(contentWeb3, btnWeb3);
});

btnOther1.addEventListener("click", function () {
  if (contentOther2.classList.contains("opacity-100")) {  
    hideContentWeb(contentOther2, btnOther2);
  }
  if (contentOther3.classList.contains("opacity-100")) {
    hideContentWeb(contentOther3, btnOther3);
  }
    showContentWeb(contentOther1, btnOther1);
});

btnOther2.addEventListener("click", function () {
  if (contentOther1.classList.contains("opacity-100")) {
    hideContentWeb(contentOther1, btnOther1);
  }
  if (contentOther3.classList.contains("opacity-100")) {
    hideContentWeb(contentOther3, btnOther3);
  }
    showContentWeb(contentOther2, btnOther2);
});
btnOther3.addEventListener("click", function () {
  if (contentOther1.classList.contains("opacity-100")) {
    hideContentWeb(contentOther1, btnOther1);
  }
  if (contentOther2.classList.contains("opacity-100")) {
    hideContentWeb(contentOther2, btnOther2);
  }
    showContentWeb(contentOther3, btnOther3);
});

sideWeb.addEventListener("click", function () {
  centerModalWeb.classList.remove("hidden", "opacity-0", "w-0");
  centerModalWeb.classList.add("opacity-100", "w-1/4");
  centerModalOther.classList.add("hidden", "opacity-0", "w-0");
  centerModalOther.classList.remove("opacity-100", "w-1/4");
  contentWeb1.classList.remove("hidden", "opacity-0");
  contentWeb1.classList.add("opacity-100");
  contentWeb2.classList.add("hidden", "opacity-0");
  contentWeb3.classList.add("hidden", "opacity-0");
  contentOther1.classList.add("hidden", "opacity-0");
  contentOther2.classList.add("hidden", "opacity-0");
  contentOther3.classList.add("hidden", "opacity-0");
  btnWeb1.classList.add("font-bold");
  btnWeb2.classList.remove("font-bold");
  btnWeb3.classList.remove("font-bold");
  btnOther1.classList.remove("font-bold");
  btnOther2.classList.remove("font-bold");
  btnOther3.classList.remove("font-bold");
});

sideOther.addEventListener("click", function () {
  centerModalOther.classList.remove("hidden", "opacity-0", "w-0");
  centerModalOther.classList.add("opacity-100", "w-1/4");
  centerModalWeb.classList.add("hidden", "opacity-0", "w-0");
  centerModalWeb.classList.remove("opacity-100", "w-1/4");
  contentOther1.classList.remove("hidden", "opacity-0");
  contentOther1.classList.add("opacity-100");
  contentOther2.classList.add("hidden", "opacity-0");
  contentOther3.classList.add("hidden", "opacity-0");
  contentWeb1.classList.add("hidden", "opacity-0");
  contentWeb2.classList.add("hidden", "opacity-0");
  contentWeb3.classList.add("hidden", "opacity-0");
  btnOther1.classList.add("font-bold");
  btnOther2.classList.remove("font-bold");
  btnOther3.classList.remove("font-bold");
  btnWeb1.classList.remove("font-bold");
  btnWeb2.classList.remove("font-bold");
  btnWeb3.classList.remove("font-bold");
});
