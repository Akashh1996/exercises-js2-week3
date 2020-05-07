/* 
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================ */

/* var body = document.querySelector("body")
 setTimeout(function back(){

    body.style.background = "red"
},5000) 

 */
setInterval(function back(){
    var colors = ["red","blue","green","yellow","silver"]
    let x = (Math.ceil(Math.random()*5))
  
    
    document.body.style.background = colors[x]
},500)



//re pracrtice

/* Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). */

/* setTimeout(() => {
    document.body.style.background = "red"
}, 5000); */
/* 
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp) */
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")
let p = document.querySelector("p")
let num = 10
let clear 


 start.addEventListener("click",function (){
    clear = setInterval(function (){
        p.innerHTML = num --
    },100)
})


stop.addEventListener("click",function(){
    clearInterval(clear)
})
