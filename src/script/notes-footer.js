class NotesFooter extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
        <h3>Submission: Membangun Notes App - 2024</h3>
         </footer>
      `;
    }
}

customElements.define('notes-footer', NotesFooter);