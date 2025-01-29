import { createToDo } from "./main_code";

const projects = { "Hello!": [] };
let currentProject = "Hello!";

function renderProject() {
    const projectList = document.querySelector("#project-list");
    const currentProjectName = document.querySelector("#current-project-name");

    projectList.innerHTML = "";

    Object.keys(projects).forEach((projectName) => {
        const li = document.createElement("li");
        li.textContent = projectName;

        console.log("Creating project list item for:", projectName);

        if (projectName === currentProject) {
            li.style.fontWeight = "bold";
            li.style.cursor = "default";
        } else {
            li.style.cursor = "pointer";
            li.addEventListener("click", () => {
                console.log("Clicked on project:", projectName);
                console.log("Before change - Current Project:", currentProject);

                currentProject = projectName;
                currentProjectName.textContent = currentProject;

                console.log("After change - Current Project:", currentProject);

                renderTask();
                renderProject();
            });
        }

        projectList.appendChild(li);
    });
}

function renderTask() {
    const list = document.querySelector("#todo-list");
    const taskProjectSelect = document.querySelector("#task-project");

    taskProjectSelect.innerHTML = "";
    Object.keys(projects).forEach((projectName) => {
        const option = document.createElement("option");
        option.value = projectName;
        option.textContent = projectName;
        taskProjectSelect.appendChild(option);
    });

    taskProjectSelect.value = currentProject;

    list.innerHTML = "";

    if (projects[currentProject]) {
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
    } else {
        console.error(`Project "${currentProject}" not found.`);
    }
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
    const dueDate = document.querySelector("#task-date").value;
    const priority = document.querySelector("#task-priority").value;
    const project = document.querySelector("#task-project").value;

    console.log("Current Project:", currentProject);
    console.log("Selected Project:", project);

    if (title && projects[project]) {
        const newTask = createToDo(title, description, dueDate, priority, project);
        projects[project].push(newTask);
        document.querySelector("#task-name").value = "";
        document.querySelector("#task-desc").value = "";
        document.querySelector("#task-date").value = "";
        renderTask();
    }
});

renderProject();
renderTask();
