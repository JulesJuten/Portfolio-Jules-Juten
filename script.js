let mijnKnoppen = document.querySelectorAll("a");
let i = 0;
let scrollAantal = 0;
while (i < mijnKnoppen.length) {
      mijnKnoppen[i].addEventListener("click", function(event) {
         window.scroll({
            top: (window.innerHeight*this.getAttribute("data-factor")),
            left: 0,
            behavior: 'smooth'
         });
         event.preventDefault();
}, false);
      i++;
}
