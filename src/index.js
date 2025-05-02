const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("web-project");
const closeModalBtn = document.getElementById("close-modal");
const prjkTitle = document.getElementById("modal-title");
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
    sideModal.classList.add("opacity-100", "w-20");
  }, 300);
  setTimeout(() => {
    centerModal.classList.remove("opacity-0", "w-0");
    centerModal.classList.add("opacity-100", "w-1/4");
  }, 500);
  setTimeout(() => {
    prjkTitle.classList.remove("opacity-0", "translate-y-4");
    prjkTitle.classList.add("opacity-100", "translate-y-0");
  }, 1200);

  // Animate modal side elements sequentially
  modalSides.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("opacity-0", "-translate-x-4");
      el.classList.add("opacity-100", "translate-x-0");
    }, 300 + index * 150); // Sequential delay: 500ms, 700ms, etc.
  });
  contentModal.forEach((el, index) => {
    setTimeout(() => {
      el.classList.remove("opacity-0");
      el.classList.add("opacity-100");
    }, 300 + index * 150); // Sequential delay: 500ms, 700ms, etc.
  });
});

// Close modal with animations
closeModalBtn.addEventListener("click", function () {
  // Reset animations for modal elements
  prjkTitle.classList.remove("opacity-100", "translate-y-0");
  prjkTitle.classList.add("opacity-0", "translate-y-4");
  sideModal.classList.remove("opacity-100", "w-20");
  sideModal.classList.add("opacity-0", "w-0");
  centerModal.classList.remove("opacity-100", "w-1/4");
  centerModal.classList.add("opacity-0", "w-0");

  modalSides.forEach((el) => {
    el.classList.add("opacity-0", "-translate-x-4");
    el.classList.remove("opacity-100", "translate-x-0");
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
  if (contentWeb2.classList.contains = "opacity-100") {
    setTimeout(() => {
      contentWeb2.classList.remove("opacity-100");
      contentWeb2.classList.add("opacity-0");
      contentWeb2.classList.add("hidden");
    }, 300);
  };
  if (contentWeb3.classList.contains = "opacity-100") {
    setTimeout(() => {      
      contentWeb3.classList.remove("opacity-100");
      contentWeb3.classList.add("opacity-0");
      contentWeb3.classList.add("hidden");
    }, 300);
  };
  setTimeout(() => {
    contentWeb1.classList.remove("hidden");
    contentWeb1.classList.remove("opacity-0")
    contentWeb1.classList.add("opacity-100")
  }, 300);
});

btnWeb2.addEventListener("click", function () {
  if (contentWeb1.classList.contains = "opacity-100") {
    setTimeout(() => {      
      contentWeb1.classList.remove("opacity-100");
      contentWeb1.classList.add("opacity-0");
      contentWeb1.classList.add("hidden");
    }, 300);
  };
  if (contentWeb3.classList.contains = "opacity-100") {
    setTimeout(() => {      
      contentWeb3.classList.remove("opacity-100");
      contentWeb3.classList.add("opacity-0");
      contentWeb3.classList.add("hidden");
    }, 300);
  };
  setTimeout(() => {
    contentWeb2.classList.remove("hidden");
    contentWeb2.classList.remove("opacity-0")
    contentWeb2.classList.add("opacity-100")
  }, 300);
});