document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("copy-btn")) return;

  const pre = e.target.previousElementSibling;
  const code = pre.querySelector("code");
  navigator.clipboard.writeText(code.innerText).then(() => {
    e.target.innerText = "Copied!";
    setTimeout(() => (e.target.innerText = "Copy"), 2000);
  });
});
