// Get elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const profileImg = document.getElementById("profileImage");
const closeBtn = document.querySelector(".close");

// Show modal on image click
profileImg.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = profileImg.src;
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date("2024-10-18");
  const endDate = new Date("2025-03-15");
  const currentDate = new Date();

  const totalDuration = endDate - startDate;
  const elapsedDuration = currentDate - startDate;

  let progressPercentage = Math.min(
    (elapsedDuration / totalDuration) * 100,
    100
  ).toFixed(2);

  // Update Français Circular Progress Bar
  const francaisProgressBar = document.getElementById("francais-progress");
  const francaisLabel = document.getElementById("francais-label");

  francaisProgressBar.style.background = `conic-gradient(#4caf50 ${progressPercentage}%, #ddd 0%)`;
  francaisLabel.textContent = `${progressPercentage}%`;
});

const links = document.querySelectorAll(".preview-link");
const previewBox = document.getElementById("link-preview");

links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    const previewText = link.getAttribute("data-preview");
    previewBox.textContent = previewText;
    previewBox.style.display = "block";
    const { pageX, pageY } = e;
    previewBox.style.top = `${pageY + 10}px`;
    previewBox.style.left = `${pageX + 10}px`;
  });

  link.addEventListener("mousemove", (e) => {
    const { pageX, pageY } = e;
    previewBox.style.top = `${pageY + 10}px`;
    previewBox.style.left = `${pageX + 10}px`;
  });

  link.addEventListener("mouseleave", () => {
    previewBox.style.display = "none";
  });
});
