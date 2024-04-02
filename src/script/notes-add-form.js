class NotesAddForm extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container bg-white shadow" id="add-notes">
        <h2 class="container-header-add">Tambah Catatan</h2>
        <form class="form" action="#" id="noteForm">
          <div class="form-group form-title">
            <label for="title">Judul:</label>
            <input type="text" id="noteTitle" name="noteTitle" required />
          </div>
          <div class="form-group form-title">
            <label for="body">Isi Catatan:</label>
            <textarea id="noteBody" name="noteBody" rows="5" required></textarea>
          </div>
          <input type="submit" value="Submit" name="submit" class="btn-submit" id="submit"/>
        </form>
      </div>
      `;
    }
}

customElements.define('notes-add-form', NotesAddForm);