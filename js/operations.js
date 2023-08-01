import { notesData } from '../components/data.js';
import { currentNodeArchive, currentNote, editInfo, infoNote, noteListEl } from './app.js';
import { modalClose } from './modal.js';



function createNote () {
  const name = document.getElementById('name').value;
  const content = document.getElementById('content').value;
  const category = document.getElementById('category').value;
  const datesInputValue = document.getElementById('dates').value;
  const dates = datesInputValue.split(',').map(date => date.trim());
  
    const newNote = {
        id: notesData.length + 1,
        name,
        time: new Date(),
        content,
        category,
        dates,
        archived: false,
      };
    
    notesData.push(newNote);
    
    noteListEl.innerHTML = '';
    

  currentNote();
  modalClose()
}


function deleteNote(event) {
  console.log(event.target.dataset)
  if (event.target.dataset.action === "delete") {
    const currentElement = event.target.closest('li');
    const id = parseInt(currentElement.dataset.id);

    
    const index = notesData.findIndex((note) => note.id === id);

    if (index !== -1) {
      
      notesData.splice(index, 1);

      currentElement.remove();

      infoNote();
    }
  }
  
}

function editNote(){
  const id = parseInt(document.getElementById('my_modal').dataset.id);
    const noteToEdit = notesData.find((note) => note.id === id);
    
    if (noteToEdit) {
      const name = document.getElementById('name').value;
      const content = document.getElementById('content').value;
      const category = document.getElementById('category').value;
      const datesInputValue = document.getElementById('dates').value;
      const dates = datesInputValue.split(',').map(date => date.trim());
      const newDates = datesInputValue.split(',').map(date => date.trim());
    
      
      if (noteToEdit.dates.length >= 2) {
        noteToEdit.dates.shift();
      }
  
      
      noteToEdit.name = name;
      noteToEdit.content = content;
      noteToEdit.category = category;
      noteToEdit.dates.push(...dates);
  editInfo()
    }

}

function archiveToggle (event) {
  if (event.target.dataset.action === "archive") {
    const currentElement = event.target.closest('li');
    
    const id = parseInt(currentElement.dataset.id);
    

    const noteToUpdate = notesData.find(note => note.id === id);

    if (noteToUpdate) {
      noteToUpdate.archived = true;
    }
  }
  else  if(event.target.dataset.action === "unArchive") {
    const currentElement = event.target.closest('li');

    const id = parseInt(event.target.dataset.id);
    
    const noteToUpdate = notesData.find(note => note.id === id);

    if (noteToUpdate) {
      noteToUpdate.archived = false;
    }
  }
  noteListEl.innerHTML = '';
  
    editInfo();
}
export {createNote, deleteNote, editNote, archiveToggle}



