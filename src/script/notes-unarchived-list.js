class NotesUnarchivedList extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-list">
        <h2 class="container-header-list">Catatan Aktif</h2>
        <div class="list-item" id="notes"></div>
      </div>
      `;
    }
}

customElements.define('notes-unarchived-list', NotesUnarchivedList);