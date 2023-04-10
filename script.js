console.log("Connected!");

let dice = document.querySelector(".dice");


$(".dice").click(function(e){
    e.preventDefault();
    console.log("clicked!");
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
    document.querySelector(".myAdvice").innerText = data.slip.advice;
    document.querySelector("#number").innerText = data.slip.id;
    });
})

$("#fa").click(function(e){
    e.preventDefault();
    $("#body").toggleClass("light");
    console.log("Hello LIGHT!");  
})