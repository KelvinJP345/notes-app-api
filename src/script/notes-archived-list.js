class NotesArchivedList extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-list">
        <h2 class="container-header-list">Catatan Diarsipkan</h2>
        <div class="list-item" id="Archived-notes"></div>
      </div>
      `;
    }
}

customElements.define('notes-archived-list', NotesArchivedList);