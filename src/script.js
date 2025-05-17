const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("web-project");
const closeModalBtn = document.getElementById("close-modal");
const sideModal = document.getElementById("container-side");
const centerModal = document.getElementById("container-center");
const btnWeb1 = document.getElementById("web-button-1");
const btnWeb2 = document.getElementById("web-button-2");
const btnWeb3 = document.getElementById("web-button-3");
const contentWeb1 = document.getElementById("web-content-1");
const contentWeb2 = document.getElementById("web-content-2");
const contentWeb3 = document.getElementById("web-content-3");
const contentModal = document.querySelectorAll(".content-modal");
const modalSides = document.querySelectorAll(".modal-side");
const sideText = document.querySelectorAll(".side-text");

// Smooth scrolling for anchor links
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

// Open modal with animations
openModalBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");

  // Trigger modal appearance animation
  setTimeout(() => {
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  }, 100);

  // Animate modal title
  setTimeout(() => {
    sideModal.classList.remove("opacity-0", "w-0");
    sideModal.classList.add("opacity-100", "w-2/6");
  }, 300);
  setTimeout(() => {
    sideModal.classList.remove("w-2/6");
    sideModal.classList.add("w-20");
  }, 1800);
  setTimeout(() => {
    centerModal.classList.remove("opacity-0", "w-0");
    centerModal.classList.add("opacity-100", "w-1/4");
  }, 500);

  // Animate modal side elements sequentially
  modalSides.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("opacity-0", "-translate-x-4");
      el.classList.add("opacity-100", "translate-x-0");
    }, 300 + index * 150);
  });
  sideText.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("text-[0px]", "opacity-0");
    }, 1800);
  });
  contentModal.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("opacity-0");
      el.classList.add("opacity-100");
    }, 300 + index * 150);
  });
});

// Close modal with animations
closeModalBtn.addEventListener("click", function () {
  // Reset animations for modal elements
  sideModal.classList.remove("opacity-100", "w-20");
  sideModal.classList.add("opacity-0", "w-0");
  centerModal.classList.remove("opacity-100", "w-1/4");
  centerModal.classList.add("opacity-0", "w-0");

  modalSides.forEach((el) => {
    el.classList.add("opacity-0", "-translate-x-4");
    el.classList.remove("opacity-100", "translate-x-0");
  });
  sideText.forEach((el) => {
    el.classList.remove("text-[0px]", "opacity-0");
  });
  contentModal.forEach((el) => {
    el.classList.add("opacity-0");
    el.classList.remove("opacity-0");
  });

  // Close modal
  modal.classList.remove("opacity-100", "scale-100");
  modal.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
});

btnWeb1.addEventListener("click", function () {
  if (contentWeb2.classList.contains("opacity-100")) {
    btnWeb2.classList.remove("font-bold")
    contentWeb2.classList.remove("opacity-100");
    contentWeb2.classList.add("opacity-0");
    setTimeout(() => {
      contentWeb2.classList.add("hidden");
    }, 200);
  }
  if (contentWeb3.classList.contains("opacity-100")) {
    btnWeb3.classList.remove("font-bold")
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