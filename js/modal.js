

const modal = document.getElementById("my_modal");
const btn = document.querySelector('.open__modal')
const span = document.getElementsByClassName("close_modal_window")[0];
const btnCreate = document.querySelector('.create__note')
const btnEdit = document.querySelector('.edit__note')

btn.addEventListener('click', modalOpen)
span.addEventListener('click', modalClose)
modal.addEventListener('click', backdrop)


function modalOpen (mode) {
  if(mode === 'edit'){
   btnCreate.classList.add('hidden-btn')
   btnEdit.classList.remove('hidden-btn')
  } else {
   btnCreate.classList.remove('hidden-btn')
   btnEdit.classList.add('hidden-btn')
  }
  
  
   modal.style.display = "block";
}

function modalClose () {
   modal.style.display = "none";
   
}

function backdrop (event) {
   if (event.target == modal) {
       
       modal.style.display = "none";
   }
}

export {modalOpen, modalClose, backdrop}