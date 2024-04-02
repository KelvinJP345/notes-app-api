import notesData from "./notes";

function script() {

  const RENDER_EVENT = 'render-notes';
  const baseUrl = 'https://notes-api.dicoding.dev/v2';

  const getNote = () => {
    fetch(`${baseUrl}/notes`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderNotes(responseJson.data);
        }
      })
      .catch(error => {
        showResponseMessage(error);
      });
  };

  const insertNote = (note) => {
    fetch(`${baseUrl}/notes`, {
      method: 'POST',
      body: JSON.stringify(note)
    }).then(response => {
      return response.json();
    }).then(responseJson => {
      showResponseMessage(responseJson.message);
      getNote();
    }).catch(error => {
      showResponseMessage(error);
    });
  };


  
  function makeNote(noteObject) {

    const { id, title, body, createdAt, archived } = noteObject;

    const textTitle = document.createElement('h2');
    textTitle.innerText = title;

    const textBody = document.createElement('p');
    textBody.innerText = body;

    const textCreatedAt = document.createElement('p');
    textCreatedAt.innerText = `Created At: ${new Date(createdAt).toLocaleString()}`;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textBody, textCreatedAt);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow')
    container.append(textContainer);
    container.setAttribute('id', `note-${id}`);

    if (archived) {

      const unarchivedButton = document.createElement('button');
      unarchivedButton.classList.add('unarchived-button');
      unarchivedButton.addEventListener('click', function () {
        undoNoteFromArchived(id);
      });

      const trashButton = document.createElement('button');
      trashButton.classList.add('trash-button');
      trashButton.addEventListener('click', function () {
        removeNoteFromArchived(id);
      });

      container.append(unarchivedButton, trashButton);
    } else {

      const archivedButton = document.createElement('button');
      archivedButton.classList.add('archived-button');
      archivedButton.addEventListener('click', function () {
        addNoteToArchived(id);
      });

      const trashButton = document.createElement('button');
      trashButton.classList.add('trash-button');
      trashButton.addEventListener('click', function () {
        removeNoteFromArchived(id);
      });

      container.append(archivedButton, trashButton);
    }
    return container;
  }

  function renderNotes(notes) {
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    notes.forEach(note => {
      const noteElement = makeNote(note);
      notesContainer.appendChild(noteElement);
    });
  }

  

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

 

  document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('noteForm');
    const inputNoteTitle = submitForm.elements.noteTitle;
    const inputNoteBody = submitForm.elements.noteBody;

    submitForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const note = {
        title: inputNoteTitle.value,
        body: inputNoteBody.value
      };
      insertNote(note);
    });

    getNote();

  });

  


  document.addEventListener(RENDER_EVENT, function () {
   
    const unArchivedNotesList = document.getElementById('notes');
    const listArchived = document.getElementById('Archived-notes');

    unArchivedNotesList.innerHTML = '';
    listArchived.innerHTML = '';

    notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    for (const notesItem of notes) {
      const noteElement = makeNote(notesItem);
      if (notesItem.archived) {
        listArchived.append(noteElement);
      } else {
        unArchivedNotesList.append(noteElement);
      }
    }
  });



    getNote(); 


}

export default script;