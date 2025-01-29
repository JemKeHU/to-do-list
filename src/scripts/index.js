import { createToDo } from "./main_code";

const projects = { "Hello!": [] };
let currentProject = "Hello!";

function renderProject() {
    const projectList = document.querySelector("#project-list");
    const projectSelect = document.querySelector("#task-project");

    projectList.innerHTML = "";
    projectSelect.innerHTML = "";

    Object.keys(projects).forEach((projectName) => {
        const li = document.createElement("li");
        li.textContent = projectName;
        if (projectName === currentProject) li.style.fontWight = "bold";

        li.addEventListener("click", () => {
            currentProject = projectName;
            renderTask();
            renderProject();
        });

        projectList.appendChild(li);

        const option = document.createElement("option");
        option.value = projectName;
        option.textContent = projectName;
        projectSelect.appendChild(option);
    });
}

function renderTask() {
    const list = document.querySelector("#todo-list");
    list.innerHTML = "";

    projects[currentProject].forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <strong>${todo.title}</strong>
                <p>${todo.description || "No description"}</p>
                <p>Deadline: ${todo.dueDate || "Unknown"}</p>
                <p>Priority: ${todo.priority || "Low"}</p>
                <p>Creation Date: ${todo.createdAt}</p>
            `;

        if (todo.completed) li.classList.add("completed");

        li.addEventListener("click", () => {
            todo.toggleComplete();
            renderTask();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            projects[currentProject].splice(index, 1);
            renderTask();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

const projectAdder = document.querySelector("#add-project");
projectAdder.addEventListener("click", () => {
    const projectName = document.querySelector("#new-project-name").value.trim();
    if (projectName && !projects[projectName]) {
        projects[projectName] = [];
        document.querySelector("#new-project-name").value = "";
        renderProject();
    }
});

const taskAdder = document.querySelector("#add-task");
taskAdder.addEventListener("click", () => {
    const title = document.querySelector("#task-name").value.trim();
    const description = document.querySelector("#task-desc").value.trim();
    const dueDate = document.querySelector("#task-date").value
    const priority = document.querySelector("#task-priority").value
    const project = document.querySelector("#task-project").value

    if (title) {
        projects[project].push(createToDo(title, description, dueDate, priority, project));
        document.querySelector("#task-name").value = "";
        document.querySelector("#task-desc").value = "";
        document.querySelector("#task-date").value = "";
        renderTask();
    }
});

renderProject();
renderTask();