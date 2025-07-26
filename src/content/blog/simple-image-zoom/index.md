---
title: "Adding a simple image zoom feature to an Astro blog"
description: "Steps to make images zoomable for your Astro blog with JavaScript and CSS."
date: "Jul 26 2025"
---

![Flag](flag.jpg)

When I started using the [Astro Nano](https://github.com/markhorn-dev/astro-nano) template, images inside the markdown posts sometimes become too small and hard to read.

So I decided to add a simple zoom feature to make images zoomable with the following steps:

## 1. Add image/s to the markdown content

Insert images into your markdown content as usual:

```md
![Sea](sea.jpg)
```

## 2. Modify \<img\> with rehype plugin

In `src/rehype/rehype-image-zoom.js`, create the following file:

```js
import { visit } from "unist-util-visit";

export default function rehypeImageZoom() {
  return (tree) => {
    visit(tree, "element", (node, _index, _parent) => {
      if (node.tagName === "img") {
        node.properties = node.properties || {};
        node.properties.class = (node.properties.class || "") + " zoomable-img";
      }
    });
  };
}
```

This rehype plugin automatically adds the `zoomable-img` class to every image from your markdown.

Then, enable it in your `astro.config.ts`:

```ts
import rehypeImageZoom from "./src/rehype/rehype-image-zoom";

export default defineConfig({
  ...,
  markdown: {
    rehypePlugins: [rehypeImageZoom],
  },
});
```

## 3. Add the CSS for the Lightbox

Include the following CSS (in `global.css` or your layout stylesheet):

```css
.zoom-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1000;
}
.zoom-overlay img {
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.zoom-overlay.active {
  opacity: 1;
  pointer-events: auto;
}
.zoomable-img {
  cursor: zoom-in;
  transition: transform 0.3s;
}
```

## 4. Add the JavaScript for Zoom Functionality

Create `public/image-zoom.js`:

```js
function isDesktop() {
  return window.matchMedia("(pointer: fine)").matches;
}

function setupZoom() {
  if (!isDesktop()) return; // Skip setup on mobile/touch devices

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
```

Then include this in your astro layout (e.g., `src/layouts/PageLayout.astro`):

```astro
<body>
  <slot />
  <script type="module" src={`${import.meta.env.BASE_URL}image-zoom.js`}></script>
</body>
```

Now, images in your posts can be clicked to open a clean, lightweight zoom view!

![Image zoom gif](image-zoom.gif)
