import User from "../entity/user";
import { makeElement } from "../tools/utils";
import renderTableHead from "./table-head";
import "../assets/css/table.css";

export default function renderTable(users) {
  const table = makeElement("table");
  table.setAttribute("border", 1);
  // table.style.width = "100%";

  table.appendChild(renderTableHead());

  users.forEach((el) => {
    const user = new User(el);
    table.appendChild(user.render());
  });

  return table;
}
