// Get the modal
var modal = document.getElementById("myModal");
var modalConfirm= document.getElementById("modal-confirm");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnConfirm = document.getElementById("myBtnConfirm");

var matches = document.querySelectorAll("i.fa-square-plus");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

matches.forEach(function (match) {
  match.addEventListener("click", function () {
    modal.style.display = "block";
    var idElm = match.getAttribute("id");
    console.log(idElm);
  });
});
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};