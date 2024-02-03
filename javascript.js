
var button =
    Array.from(document.getElementsByClassName("button"));
var rated = document.getElementById("rate");
var submit = document.getElementsByClassName("submit")[0];
button.forEach((element) => {
    element.addEventListener("click", function () { myFunction(this) })
})
function myFunction(element) {
    element.style.backgroundColor = "hsl(217, 12%, 63%)";
    var indexx = button.indexOf(element);
    for (let index = 0; index < button.length; index++) {
        if(indexx==index){
            continue;
        }
        button[index].style.backgroundColor = " hsl(213, 15%, 28%)";
    }
    rated.innerHTML = element.innerHTML;
    submit.addEventListener("click", () => {
        submit.classList.add("clicked");
        document.getElementsByTagName("main")[0].style.animationName = "flip";
    })
} 
