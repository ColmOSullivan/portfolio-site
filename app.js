// Hamburger menu
const hamburgerMenu = document.querySelector(".hamburgerMenu")
const navList = document.querySelector(".navList")

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    navList.classList.remove("active")
}))

// modal button
var modalBtns = document.querySelectorAll(".modalOpen");

modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll('.modalClose');

closeBtns.forEach(function(btn) {
  btn.onclick = function(){
    var modal = (btn.closest(".modal").style.display="none");
  };
});

window.onclick = function(event){
    if(event.target.className === 'modal'){
        event.target.style.display = "none";
    }
}