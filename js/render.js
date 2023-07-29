import { listArchived, listInfoQuantity, noteListEl } from './app.js';





 function renderCard(markup) {
  noteListEl.insertAdjacentHTML('beforeend', markup);
  
} 

function renderInfoQuantity(markup) {
  listInfoQuantity.insertAdjacentHTML('beforeend', markup);
  
}
function renderArchived(markup) {
  listArchived.insertAdjacentHTML('beforeend', markup);
  
}

function markupArchived(note) {
  let icon = ''
  if(note.category === 'Task'){
    icon = '<i class="fa-solid fa-shop"></i>'
  } 
  if (note.category === 'Idee') {
    icon = '<i class="fa-solid fa-lightbulb"></i>'
  }
  if (note.category === 'Quote') {
    icon = '<i class="fa-solid fa-shuffle"></i>'
  }
  
return `
<li class='item__note' data-id="${note.id}">
      
      <ul class='list_archive'>
      <li class="item-info ">
      <p class='name'><span class='iconName'>${icon}</span>${note.name}</p>
      </li>
      <li class="item-info time">
      <p class='time'>${note.time}</p>
      </li>
      <li class="item-info category">
      <p class='category'>${note.category}</p>
      </li>
      <li class="item-info">
          <button class="button__unArchive button__event" data-action="unArchive" data-id="${note.id}"><i class="fa-solid fa-box-archive"></i></button>
      </li>
      </ul>
      
      
      
  
    </li>
`
}


function markupInfo(category) {
  console.log(category)
  listInfoQuantity.innerHTML = '';

  let markup = '';
  
  category.forEach((data) => {
    

    markup += `
      <li class='item__note' data-id="${data.id}">
        <ul class='list_info'>
          <li class="item-info">
            <p class='name'><span class='iconName'>${data.icon}</span>${data.name}</p>
          </li>
          <li style="margin-left: 85px" class="item-info">
            <p class='quantity'>${data.quantity}</p>
          </li>
          <li class="item-info">
            <p class='archived'>${data.archivedCount}</p>
          </li>
        </ul>
      </li>`;
  });

  return markup;
}

 function markupItem(note) {
  let icon = ''
    if(note.category === 'Task'){
      icon = '<i class="fa-solid fa-shop"></i>'
    } 
    if (note.category === 'Idee') {
      icon = '<i class="fa-solid fa-lightbulb"></i>'
    }
    if (note.category === 'Quote') {
      icon = '<i class="fa-solid fa-shuffle"></i>'
    }
    
    const datesString = note.dates.join(', ');
    
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
      <p class='dates'>${datesString}</p>
      </li>
      </ul>
      <div class="list_btn">
          <div class='item_btn'>
              <button class="button__edit button__event" data-action="edit" data-id="${note.id}"><i class="fa-solid fa-pen-to-square"></i></button>
          </div>
          <div class='item_btn'>
              <button class="button__archive button__event" data-action="archive" data-id="${note.id}"><i class="fa-solid fa-inbox" ></i></button>
          </div>
          <div class='item_btn'>
              <button class="button__delete button__event" data-action="delete" data-id="${note.id}"><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>
      
      
      
  
    </li>
  `;
  }

  export {renderCard, markupItem, renderInfoQuantity, markupInfo, renderArchived, markupArchived}



