const addNoteBtn = document.querySelector('.create__note')

console.log(addNoteBtn, 'eeeee')

addNoteBtn.addEventListener('click', addNode)

function addNode () {
    const name = document.getElementById('name').value;
    const time = document.getElementById('time').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;
    const datesInputValue = document.getElementById('dates').value;
    const dates = datesInputValue.split(',').map(date => date.trim());

    const newNote = {
        id: notesData.length + 1, // Предположим, что у заметки будет уникальный id
        name,
        time,
        content,
        category,
        dates,
        archived: false,
      };
    
      // Добавляем новую заметку в массив notesData
      notesData.push(newNote);
    
      // Очищаем список заметок перед перерисовкой
      noteListEl.innerHTML = '';
    
      // Отображаем все заметки, включая новую
      currentNote();
    
      // Закрываем модальное окно после создания заметки
      closeModal();
}