import { createToDo } from "./main_code";

const todos = [];

function renderTask() {
    const list = document.querySelector("#todo-list");
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo.title;
        if (todo.completed) li.classList.add("completed");

        li.addEventListener("click", () => {
            todo.toggleComplete();
            renderTask();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            todos.splice(index, 1);
            renderTask();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

const addTask = document.querySelector("#add-task");
addTask.addEventListener("click", () => {
    const input = document.querySelector("#task");
    if(input.value.trim()) {
        todos.push(createToDo(input.value.trim()));
        input.value = "";
        renderTask();
    }
});

