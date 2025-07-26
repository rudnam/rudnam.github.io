function setupZoom() {
  const overlay = document.querySelector(".zoom-overlay") || createOverlay();

  document.querySelectorAll(".zoomable-img").forEach((img) => {
    img.addEventListener("click", () => {
      overlay.querySelector("img").src = img.src;
      overlay.classList.add("active");
    });
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "zoom-overlay";
  const overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);
  return overlay;
}

// Run on initial load
setupZoom();

// Re-run when Astro page navigation finishes
document.addEventListener("astro:page-load", setupZoom);
