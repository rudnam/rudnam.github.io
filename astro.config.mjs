import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeImageZoom from "./src/rehype/rehype-image-zoom";

export default defineConfig({
  site: "https://rudnam.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [rehypeImageZoom],
  },
});
