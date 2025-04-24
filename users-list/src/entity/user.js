import { COLUMNS } from "../tools/constants";
import { makeElement } from "../tools/utils";

class User {
  constructor({ id, name, username, email, address }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this._address = address;

    // this.remove = this.remove.bind(this);
  }

  get address() {
    return `${this._address.city} ${this._address.street}`;
  }

  //   remove(event) {
  //     event.target.parentElement.remove();
  //   }

  //   remove() {
  //     document.getElementById(`tr-${this.id}`).remove();
  //   }

  remove = () => document.getElementById(`tr-${this.id}`).remove();

  renderDeleteAction() {
    const deleteAction = makeElement("td");
    deleteAction.textContent = "x";
    deleteAction.style.color = "red";
    deleteAction.style.padding = "5px";
    deleteAction.style.cursor = "pointer";
    deleteAction.addEventListener("click", this.remove);
    // deleteAction.addEventListener("click", () => this.remove());
    // deleteAction.addEventListener("click", this.remove.bind(this));

    return deleteAction;
  }

  render() {
    const tr = makeElement("tr");
    tr.setAttribute("id", `tr-${this.id}`);

    COLUMNS.forEach((column) => {
      const td = makeElement("td");
      td.textContent = this[column];

      tr.appendChild(td);
    });

    tr.appendChild(this.renderDeleteAction());

    return tr;
  }
}

export default User;
