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

// Open modal via web project
openModalWeb.addEventListener("click", function () {
  modal.classList.remove("hidden");

  setTimeout(() => {
    centerModalWeb.classList.remove("hidden");
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  }, 100);

  setTimeout(() => {
    sideModal.classList.remove("opacity-0", "w-0");
    sideModal.classList.add("opacity-100", "w-2/6");
  }, 500);
  setTimeout(() => {
    centerModalWeb.classList.remove("opacity-0", "w-0");
    centerModalWeb.classList.add("opacity-100", "w-1/4");
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
    contentModal.forEach((el) => {
      if (!el.classList.contains("hidden")) {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-100");
      } else {
        el.classList.remove("opacity-100");
        el.classList.add("opacity-0");
      }
    });
  }, 1000);
});

// Open modal via other button
openModalOther.addEventListener("click", function () {
  modal.classList.remove("hidden");

  setTimeout(() => {
    centerModalOther.classList.remove("hidden");
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
    contentModal.forEach((el) => {
      if (!el.classList.contains("hidden")) {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-100");
      } else {
        el.classList.remove("opacity-100");
        el.classList.add("opacity-0");
      }
    });
  }, 1000);
});

closeModalBtn.addEventListener("click", function () {
  sideModal.classList.remove("opacity-100", "w-20");
  sideModal.classList.add("opacity-0", "w-0");
  if (!centerModalWeb.classList.contains("hidden")) {
    centerModalWeb.classList.remove("opacity-100", "w-1/4");
    centerModalWeb.classList.add("opacity-0", "w-0", "hidden");
  } else if (!centerModalOther.classList.contains("hidden")) {
    centerModalOther.classList.remove("opacity-100", "w-1/4");
    centerModalOther.classList.add("opacity-0", "w-0", "hidden");
  }

  modalSides.forEach((el) => {
    el.classList.add("opacity-0", "-translate-x-4");
    el.classList.remove("opacity-100", "translate-x-0");
  });
  sideText.forEach((el) => {
    el.classList.remove("text-[0px]", "opacity-0");
  });
    contentModal.forEach((el) => {
      if (el.classList.contains("opacity-100")) {
        el.classList.remove("opacity-100");
        el.classList.add("opacity-0");
      }
    });

  modal.classList.remove("opacity-100", "scale-100");
  modal.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
});

btnWeb1.addEventListener("click", function () {
  if (contentWeb2.classList.contains("opacity-100")) {
    btnWeb2.classList.remove("font-bold");
    contentWeb2.classList.remove("opacity-100");
    contentWeb2.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb2.classList.add("hidden");
    }, 200);
  }
  if (contentWeb3.classList.contains("opacity-100")) {
    btnWeb3.classList.remove("font-bold");
    contentWeb3.classList.remove("opacity-100");
    contentWeb3.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb3.classList.add("hidden");
    }, 200);
  }
  setTimeout(() => {
    contentWeb1.classList.remove("hidden");
    setTimeout(() => {
      contentWeb1.classList.remove("opacity-0");
      contentWeb1.classList.add("opacity-100");
      btnWeb1.classList.add("font-bold");
    }, 50);
  }, 200);
});

btnWeb2.addEventListener("click", function () {
  if (contentWeb1.classList.contains("opacity-100")) {
    btnWeb1.classList.remove("font-bold");
    contentWeb1.classList.remove("opacity-100");
    contentWeb1.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb1.classList.add("hidden");
    }, 200);
  }
  if (contentWeb3.classList.contains("opacity-100")) {
    btnWeb3.classList.remove("font-bold");
    contentWeb3.classList.remove("opacity-100");
    contentWeb3.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb3.classList.add("hidden");
    }, 200);
  }
  setTimeout(() => {
    contentWeb2.classList.remove("hidden");
    setTimeout(() => {
      contentWeb2.classList.remove("opacity-0");
      contentWeb2.classList.add("opacity-100");
      btnWeb2.classList.add("font-bold");
    }, 50);
  }, 200);
});

btnWeb3.addEventListener("click", function () {
  if (contentWeb1.classList.contains("opacity-100")) {
    btnWeb1.classList.remove("font-bold");
    contentWeb1.classList.remove("opacity-100");
    contentWeb1.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb1.classList.add("hidden");
    }, 200);
  }
  if (contentWeb2.classList.contains("opacity-100")) {
    btnWeb2.classList.remove("font-bold");
    contentWeb2.classList.remove("opacity-100");
    contentWeb2.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb2.classList.add("hidden");
    }, 200);
  }
  setTimeout(() => {
    contentWeb3.classList.remove("hidden");
    setTimeout(() => {
      contentWeb3.classList.remove("opacity-0");
      contentWeb3.classList.add("opacity-100");
      btnWeb3.classList.add("font-bold");
    }, 50);
  }, 200);
});
