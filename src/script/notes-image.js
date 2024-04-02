class NotesImage extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <img src="Notes-amico.svg" 
        alt="Notes" 
        id="logo">
      `;
    }
}

customElements.define('notes-image', NotesImage);