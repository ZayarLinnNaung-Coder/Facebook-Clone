let upper = document.getElementById("upper");
let seeMoreDiv = document.getElementById("seeMoreDiv");
let seeLessDiv = document.getElementById("seeLessDiv");
let leftPart = document.getElementById("leftPart");
let totalChildren = upper.children.length;

for(let i=0; i<totalChildren; i++){
    if(i>5){
        upper.children[i].classList += "hide";
    }
}

seeMoreDiv.addEventListener("click",function () {
    for(let i=0; i<totalChildren; i++){
        if(i>5){
            upper.children[i].classList.remove("hide");
        }
    }
    this.classList += "hide";
})
seeLessDiv.addEventListener("click",function () {
    for(let i=0; i<totalChildren; i++){
        if(i>5){
            upper.children[i].classList += "hide";
        }
    }
    seeMoreDiv.classList.remove("hide")
})
function showLeft() {
    if(leftPart.classList.contains("blp")){
        leftPart.style.display = "none";
        leftPart.classList.remove("blp");
        document.getElementById("menuLink").style.stroke = "#A8ABAF";
    }else{
        document.getElementById("menuLink").style.stroke = "blue";
        leftPart.style.display = "block";
        leftPart.classList.add("blp");
    }
}
