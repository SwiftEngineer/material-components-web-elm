import { MDCDataTable } from "./component";

class MdcDataTable extends HTMLElement {

  constructor() {
    super();
    this.dataTable_;
  }

  connectedCallback() {
    this.datatable_ = new MDCDataTable(this);
  }

  disconnectedCallback() {
    this.dataTable_.destroy();
  }
};

customElements.define("mdc-data-table", MdcDataTable);
