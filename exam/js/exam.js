'use strict';

function taskAdd(event){
    event.preventDefault(); 

    let textArea = document.forms.add_task.elements.taskName;
    let textAreaValue = textArea.value.trim();

    if (textAreaValue.length < 1 || textAreaValue.length > 20){
        let error = document.querySelector(".error1");
        error.innerText = "Значение должно быть в диапозоне от 1 до 20 символов";
        return;
    }

    let date = new Date(document.forms.add_task.elements.dateTime.value);
    let now = new Date().toISOString();
    if (date < now){
        let error = document.querySelector(".error2");
        error.innerText = "Дата не может быть в прошлом";
        return;
    }

    let task = {
        title: textAreaValue,
        description: document.forms.add_task.elements.taskDiscription.value.trim(),
        date: date
    };

    let tasks = localStorage.getItem("tasks");
    tasks = JSON.parse(tasks);
    if (!tasks) {
        tasks = [];
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);

    let taskAdd = document.querySelector(".addTask");
    taskAdd.innerText = "Задача успешно добавлена";
    this.reset();
    }

let form = document.forms.add_task;
form.addEventListener("submit", taskAdd);




function addPeople (){
let addContainer = document.querySelector(".divAdd");
addContainer.innerHTML =
    `<div>
    <input class="addAction" type="text" placeholder="Введите имя участника" name="name">
    <button type="button">X</button>
    </div>`;
// document.querySelector(".divAdd").append(addContainer);
// this.reset();
}
let buttonAdd = document.querySelector("#add-btn");
buttonAdd.addEventListener("click", addPeople);


