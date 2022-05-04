

let tasks = localStorage.getItem("tasks");



    if (tasks){
    tasks = JSON.parse(tasks);
    for (let task of tasks){
        let blockHTML = document.getElementsById("tasks")
        let block = document.createElement("div");
        block.innerHTML = 
        `<h3> ${task.title}<\h3>
        <h2> ${task.description}<\h2>
        <h1> ${task.date}<\h1>`
        blockHTML.append(block);
        }
}

console.log(tasks);