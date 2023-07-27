
const modal = document.getElementById("my_modal");
const btn = document.querySelector('.open__modal')
const span = document.getElementsByClassName("close_modal_window")[0];
console.log(btn, 'btnbtnbtnbtn')
btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}