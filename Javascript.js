let button = document.querySelectorAll("svg");

button.forEach((value,index) =>{
    value.addEventListener("mouseenter", function(){
        this.querySelector("path").style.fill = "white";
        this.style.backgroundColor = "#3167c4";
        this.style.cursor = "pointer";
    },false )

    value.addEventListener("mouseleave", function(){
        this.querySelector("path").style.fill= "#3167c4";
        this.style.backgroundColor = "transparent";
    }, false)
}
)

let button1= document.querySelector("input[type=\"submit\"]");
button1.addEventListener("mouseenter", function(){
    this.style.cursor = "pointer";
    this.style.boxShadow = "1px 2px 5px 2px hsl(223, 100%, 88%)";
    this.style.transition = "box-shadow .5s";
}, false)

button1.addEventListener("mouseleave", function(){
    this.style.cursor = "none";
    this.style.boxShadow = "none";
}, false);



window.addEventListener("DOMContentLoaded", function(e){
    let text = document.getElementById("text");
    let submit = document.getElementById("submit");

    submit.addEventListener("click", function(e){
        let email = text.value.trim();
        let valid= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,}$/.test(email);
        let notification1= document.getElementById("notification");
        let parent = this.parentNode;
        let parent1 = parent.parentNode;

    if(!valid){
        e.preventDefault();
        text.style.borderColor = "hsl(354, 100%, 66%)";

        if(!notification1){
        let para = document.createElement("p");
        para.textContent= "This is an invalid email format, please try again";
        para.setAttribute("id", "notification");
        para.style.color = "red";
        para.style.textAlign = "center";
        parent1.append(para);

    }}

    else{
        text.style.borderColor = "hsl(223, 100%, 88%)";
        if(notification1){
        parent1.removeChild(notification1);
        }
    }
}, false)
}, false)

