"use strict";
let blockTasks = document.getElementById("tasks");
let tasks = localStorage.getItem("tasks");
if (tasks){
    tasks = JSON.parse(tasks);
    for (let task of tasks){
        let block = document.createElement("div");
        block.classList="smth";
        block.innerHTML = 
        `<h1> ${task.title}<\h1>
        <h2> ${task.description}<\h2>
        <h2>Выполнить к: ${task.date}<\h2>`
        blockTasks.append(block);
        }
}

console.log(tasks);

function changeColor () {
    this.style.backgroundColor = "#F39C12";
}

let clic = document.querySelector(".smth")
clic.addEventListener("click", changeColor)