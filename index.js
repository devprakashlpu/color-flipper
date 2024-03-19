const colors = ["red","black","yellow","pink","maroon","orange","pink","gray","green","voilent","white"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function() {
    const randomNumber = myFunction();
    document.body.style.backgroundColor = colors[randomNumber];
        
});
    


function myFunction(){
    return Math.floor(Math.random() * colors.length);
}