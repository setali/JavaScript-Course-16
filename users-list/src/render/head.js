import { makeElement } from "../tools/utils";
import logo from "../assets/images/logo.jpeg";
import "../assets/scss/head.scss";

export default function renderHead() {
  const div = makeElement("div");
  div.classList.add("head");
  const h2 = makeElement("h2");
  h2.textContent = "Users List";

  const img = makeElement("img");
  img.setAttribute("src", logo);

  div.appendChild(img);
  div.appendChild(h2);

  return div;
}
