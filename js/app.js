import { notesData } from '../components/data.js';
import { modalClose, modalOpen } from './modal.js';
import { archiveToggle, createNote, deleteNote, editNote } from './operations.js';
import { markupArchived, markupInfo, markupItem, renderArchived, renderCard, renderInfoQuantity } from './render.js';

const noteListEl = document.querySelector('.noteList')
const noteListArchive = document.querySelector('.list-render-archived')
console.log(noteListArchive)
const listInfoQuantity = document.querySelector('.list-render-info')
const listArchived = document.querySelector('.list-render-archived')

const btnCreateNote = document.querySelector('.create__note')

const btnEdit = document.querySelector('.edit__note')



btnCreateNote.addEventListener('click', createNote)
btnEdit.addEventListener('click', (event) => {
  editNote(event)
})


function currentNote() {
  const archivedNotesFalse = notesData.filter(el => el.archived === false);
  archivedNotesFalse.map(el => {
      const markup = markupItem(el);
      renderCard(markup);
      
    });
    
  }
  currentNote();

function currentNodeArchive() {
  listArchived.innerHTML = '';
  const archivedNotesTrue = notesData.filter(el => el.archived === true);
    archivedNotesTrue.map(el => {
      const markup = markupArchived(el);
      renderArchived(markup);
      
    });
}

  function editInfo() {
    modalClose()
    
  noteListEl.innerHTML = '';
  currentNote();
  infoNote();
  }
  

  function infoNote() {
    let taskCount = 0;
  let taskArchivedCount = 0;
  let ideeCount = 0;
  let ideeArchivedCount = 0;
  let quoteCount = 0;
  let quoteArchivedCount = 0;

  notesData.filter((note) => {
    switch (note.category) {
      case 'Task':
        if (note.archived) {
          taskArchivedCount++;
        } else {
          taskCount++;
        }
        break;
      case 'Idee':
        if (note.archived) {
          ideeArchivedCount++;
        } else {
          ideeCount++;
        }
        break;
      case 'Quote':
        if (note.archived) {
          quoteArchivedCount++;
        } else {
          quoteCount++;
        }
        break;
      default:
        break;
    }
  });

  const categories = [
    {name: 'Task', icon: '<i class="fa-solid fa-shop"></i>', quantity: taskCount, archivedCount: taskArchivedCount },
    {name: 'Idee', icon: '<i class="fa-solid fa-lightbulb"></i>', quantity: ideeCount, archivedCount: ideeArchivedCount },
    {name: 'Quote', icon: '<i class="fa-solid fa-shuffle"></i>', quantity: quoteCount, archivedCount: quoteArchivedCount },
  ]
  
  const archivedNotesTrue = notesData.filter(el => el.archived === true);
  console.log(archivedNotesTrue, 'archivedNotesTrue')
  
  

  const markup = markupInfo(categories)
  renderInfoQuantity(markup)
  currentNodeArchive()
  
  }
  infoNote()
  
  noteListEl.addEventListener('click', function(event) {
    const target = event.target;
    if (target.matches('.button__edit')) {
      const currentElement = target.closest('li');
      const id = parseInt(currentElement.dataset.id);
      
      
      const noteToEdit = notesData.find((note) => note.id === id);
      if (noteToEdit) {
        document.getElementById('name').value = noteToEdit.name;
        document.getElementById('time').value = noteToEdit.time;
        document.getElementById('content').value = noteToEdit.content;
        document.getElementById('category').value = noteToEdit.category;
        const lastDate = noteToEdit.dates.length > 0 ? noteToEdit.dates[noteToEdit.dates.length - 1] : '';
      document.getElementById('dates').value = lastDate;
      }
      document.getElementById('my_modal').dataset.id = id;

      modalOpen('edit')

    } else if (target.matches('.button__delete')) {
      deleteNote(event);
    } else if (target.matches('.button__archive')) {
      archiveToggle(event)
    }
  });

  noteListArchive.addEventListener('click', function(event) {
    const target = event.target;
    if (target.matches('.button__unArchive')) {
      archiveToggle(event);
    }
  })
  

  export {noteListEl, btnCreateNote, currentNote, listInfoQuantity, listArchived, infoNote, btnEdit, editInfo, currentNodeArchive}