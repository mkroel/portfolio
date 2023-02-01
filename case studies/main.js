function slider() {
    var slideValue = document.getElementById("slider").value;
    document.getElementById("afterImg").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%";
}

/* modal */
var modal = document.getElementById("modal");


function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function toggleModal() {
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else if (modal.style.display == "block") {
    modal.style.display = "none";
  }
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = openModal()