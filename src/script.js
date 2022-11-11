let theInput = document.getElementById("color");
let chbox;

let color = 'white';

if (window.performance) { 
    chbox = document.getElementById('check');
    
    if (chbox.checked) {
        color = localStorage.getItem('color')
        document.body.style.backgroundColor = color;
	}
}

theInput.addEventListener("input", function(){
  color = theInput.value;
}, false);

document.querySelector("#color-btn").onclick = function(){
    document.body.style.backgroundColor = color;
    localStorage.setItem('color', color)
  }


