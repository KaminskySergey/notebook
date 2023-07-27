
const notesData = [
  {
    id: 1,
    name: '1',
    time: '2023-07-27T12:00:00',
    content:
      'У меня будет визит к стоматологу 3/5/2021, перенёс его с 5/5/2021',
    category: 'Task',
    dates: ['3/5/2021', '5/5/2021'],
    archived: false,
  },
  {
    id: 2,
    name: 'shop2',
    time: '2023-07-28T14:30:00',
    content: 'Написать отчет о выполненной работе',
    category: 'Task',
    dates: [],
    archived: false,
  },
  {
    id: 3,
    name: 'shop3',
    time: '2023-07-29T09:15:00',
    content: 'Идея: создать приложение для заметок',
    category: 'Idee',
    dates: [],
    archived: false,
  },
  {
    id: 4,
    name: 'shop4',
    time: '2023-07-30T18:00:00',
    content: 'Приготовить ужин для гостей',
    category: 'Task',
    dates: [],
    archived: false,
  },
  {
    id: 5,
    name: 'shop5',
    time: '2023-07-31T10:00:00',
    content: 'Купить продукты: молоко, яйца, овощи',
    category: 'Task',
    dates: [],
    archived: false,
  },
  {
    id: 6,
    name: 'shop6',
    time: '2023-08-01T16:45:00',
    content: 'Захватывающая идея для нового проекта',
    category: 'Idee',
    dates: [],
    archived: false,
  },
  {
    id: 7,
    name: 'shop7',
    time: '2023-08-02T11:30:00',
    content: 'Случайная мысль: посмотреть новый фильм',
    category: 'Quote',
    dates: [],
    archived: false,
  },
];

const noteEl = document.querySelector('.notebook');

const noteListEl = document.querySelector('.noteList');

const archiveEl = document.querySelector('.archive_notebook');

const addNote = document.querySelector('.create__note')

// addNote.addEventListener('click', createNote)

// render note
function currentNote() {
  notesData.map(el => {
    const markup = markupItem(el);
    renderCard(markup);
  });
}
currentNote();
function renderCard(markup) {
  noteListEl.insertAdjacentHTML('beforeend', markup);
}

function markupItem(note) {
  console.log(note, 'notenote');
  let icon = ''
  if(note.category === 'Task'){
    icon = '<i class="fa-solid fa-shop"></i>'
  } 
  if (note.category === 'Idee') {
    icon = '<i class="fa-solid fa-lightbulb"></i>'
  }
  if (note.category !== 'Task' &&  note.category !== 'Idee') {
    icon = '<i class="fa-solid fa-shuffle"></i>'
  }
  return `
<li class='item__note' data-id="${note.id}">
    
    <ul class='list_info'>
    <li class="item-info ">
    <p class='name'><span class='iconName'>${icon}</span>${note.name}</p>
    </li>
    <li class="item-info time">
    <p class='time'>${note.time}</p>
    </li>
    <li class="item-info category">
    <p class='category'>${note.category}</p>
    </li>
    <li class="item-info content">
    <p class='content'>${note.content}</p>
    </li>
    <li class="item-info dates">
    <p class='dates'>${note.dates.join(', ')}</p>
    </li>
    </ul>
    <ul class="list_btn">
        <li class='item_btn'>
            <button onclick="editNote(${
              note.id
            })"><i class="fa-solid fa-pen-to-square"></i></button>
        </li>
        <li class='item_btn'>
            <button onclick="archiveNote(${
              note.id
            })"><i class="fa-solid fa-inbox"></i></button>
        </li>
        <li class='item_btn'>
            <button onclick="removeNote(${
              note.id
            })"><i class="fa-solid fa-trash"></i></button>
        </li>
    </ul>
    
    
    

  </li>
`;
}
//=====================================