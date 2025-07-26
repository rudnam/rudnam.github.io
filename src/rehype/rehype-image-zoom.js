import { visit } from "unist-util-visit";

export default function rehypeImageZoom() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "img") {
        node.properties = node.properties || {};
        node.properties.class = (node.properties.class || "") + " zoomable-img";
      }
    });
  };
}
