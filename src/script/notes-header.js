class NotesHeader extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
         <header>
         <h1>Notes Apps</h1>
        </header>
      `;
    }
}

customElements.define('notes-header', NotesHeader);