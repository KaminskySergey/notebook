import { notesData } from '../components/data.js';
import { currentNote, editInfo, infoNote, noteListEl } from './app.js';
import { modalClose } from './modal.js';



function createNote () {
  const name = document.getElementById('name').value;
  const time = document.getElementById('time').value;
  const content = document.getElementById('content').value;
  const category = document.getElementById('category').value;
  const datesInputValue = document.getElementById('dates').value;
  const dates = datesInputValue.split(',').map(date => date.trim());
  
    const newNote = {
        id: notesData.length + 1,
        name,
        time,
        content,
        category,
        dates,
        archived: false,
      };
    
    notesData.push(newNote);
    
    noteListEl.innerHTML = '';
    

  // Отобразите все заметки, включая новую
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
      const time = document.getElementById('time').value;
      const content = document.getElementById('content').value;
      const category = document.getElementById('category').value;
      const datesInputValue = document.getElementById('dates').value;
      const dates = datesInputValue.split(',').map(date => date.trim());
      const newDates = datesInputValue.split(',').map(date => date.trim());
    
      
      if (noteToEdit.dates.length >= 2) {
        noteToEdit.dates.shift();
      }
  
      // Добавляем новую дату в конец массива
      
      // Обновляем свойства заметки
      noteToEdit.name = name;
      noteToEdit.time = time;
      noteToEdit.content = content;
      noteToEdit.category = category;
      noteToEdit.dates.push(...dates);
  editInfo()
    }

}

function archiveAdd (event) {
  if (event.target.dataset.action === "archive") {
    const currentElement = event.target.closest('li');
    const id = parseInt(currentElement.dataset.id);
console.log(id)
    const noteToUpdate = notesData.find(note => note.id === id);
console.log(noteToUpdate)
    if (noteToUpdate) {
      // Обновляем свойство 'archived', установив его в true
      noteToUpdate.archived = true;
    }
    
}
noteListEl.innerHTML = '';
    

    // Пример: если 'editInfo()' обновляет другие элементы пользовательского интерфейса, вызываем его
    editInfo();
}
export {createNote, deleteNote, editNote, archiveAdd}

  


