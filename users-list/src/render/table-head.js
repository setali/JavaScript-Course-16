import { COLUMNS } from "../tools/constants";
import { makeElement } from "../tools/utils";

export default function renderTableHead() {
  const tr = makeElement("tr");

  COLUMNS.forEach((column) => {
    const th = makeElement("th");
    th.textContent = column;
    tr.appendChild(th);
  });

  return tr;
}
