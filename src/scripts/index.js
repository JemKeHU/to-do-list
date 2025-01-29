import { createToDo } from "./main_code";

const projects = { "Hello": [] };
let currentProject = "Hello";
let taskToEdit = null; 
let projectToEdit = null;

document.querySelector("#close-edit-task-modal").addEventListener("click", () => {
    closeModal('edit-task-modal');
});

document.querySelector("#close-edit-project-modal").addEventListener("click", () => {
    closeModal('edit-project-modal');
});

document.querySelector("#close-add-task-modal").addEventListener("click", () => {
    closeModal('add-task-modal');
});

document.querySelector("#close-add-project-modal").addEventListener("click", () => {
    closeModal('add-project-modal');
});

function openModal(modalId) {
    document.querySelector(`#${modalId}`).style.display = 'block';
}

function closeModal(modalId) {
    document.querySelector(`#${modalId}`).style.display = 'none';
}

function updateTaskProjectSelect() {
    const taskProjectSelect = document.querySelector("#task-project");
    taskProjectSelect.innerHTML = "";
    Object.keys(projects).forEach((projectName) => {
        const option = document.createElement("option");
        option.value = projectName;
        option.textContent = projectName;
        taskProjectSelect.appendChild(option);
    });
}

function renderProject() {
    const projectList = document.querySelector("#project-list");
    const currentProjectName = document.querySelector("#current-project-name");

    projectList.innerHTML = "";

    Object.keys(projects).forEach((projectName) => {
        const li = document.createElement("li");
        li.textContent = projectName;

        if (projectName === currentProject) {
            li.style.fontWeight = "bold";  // Делаем жирным текущий проект
            li.style.cursor = "default";
        } else {
            li.style.cursor = "pointer";
            li.addEventListener("click", () => {
                if (currentProject !== projectName) {
                    currentProject = projectName;
                    currentProjectName.textContent = currentProject;
                    renderTask();
                    renderProject();
                }
            });
        }

        const editProjectBtn = document.createElement("button");
        editProjectBtn.textContent = "✏️";
        editProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            projectToEdit = projectName;
            openEditProjectModal(projectName);
        });

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "❌";
        deleteProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteProject(projectName);
        });

        li.appendChild(editProjectBtn);
        li.appendChild(deleteProjectBtn);
        projectList.appendChild(li);
    });
}

function renderTask() {
    const list = document.querySelector("#todo-list");
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
                <label>
                    Completed:
                    <input type="checkbox" ${todo.completed ? "checked" : ""} class="task-completed" data-index="${index}">
                </label>
                <button class="edit-task" data-index="${index}">Edit</button>
                <button class="delete-task" data-index="${index}">❌</button>
            `;

            li.querySelector(".delete-task").addEventListener("click", (e) => {
                e.stopPropagation();
                projects[currentProject].splice(index, 1);
                renderTask();
            });

            li.querySelector(".edit-task").addEventListener("click", (e) => {
                e.stopPropagation();
                openTaskModal(index);
            });

            li.querySelector(".task-completed").addEventListener("change", (e) => {
                const taskIndex = e.target.dataset.index;
                projects[currentProject][taskIndex].completed = e.target.checked;
            });

            list.appendChild(li);
        });
    } else {
        console.error(`Project "${currentProject}" not found.`);
    }
}

function openEditTaskModal(todo) {
    document.querySelector("#edit-task-name").value = todo.title;
    document.querySelector("#edit-task-desc").value = todo.description;
    document.querySelector("#edit-task-date").value = todo.dueDate;
    document.querySelector("#edit-task-priority").value = todo.priority;

    openModal('edit-task-modal');
}

document.querySelector("#submit-edit-task").addEventListener("click", () => {
    if (taskToEdit) {
        taskToEdit.title = document.querySelector("#edit-task-name").value.trim();
        taskToEdit.description = document.querySelector("#edit-task-desc").value.trim();
        taskToEdit.dueDate = document.querySelector("#edit-task-date").value;
        taskToEdit.priority = document.querySelector("#edit-task-priority").value;

        renderTask();
    }

    closeModal('edit-task-modal');
});

function openEditProjectModal(projectName) {
    document.querySelector("#edit-project-name").value = projectName;
    openModal('edit-project-modal');
}

document.querySelector("#submit-edit-project").addEventListener("click", () => {
    const newProjectName = document.querySelector("#edit-project-name").value.trim();
    if (newProjectName && projects[currentProject]) {
        projects[newProjectName] = projects[currentProject];
        delete projects[currentProject];
        currentProject = newProjectName; 
        document.querySelector("#current-project-name").textContent = currentProject;
        renderProject();
        renderTask();
    }

    closeModal('edit-project-modal');
});


function deleteProject(projectName) {
    if (projects[projectName]) {
        delete projects[projectName];
        if (currentProject === projectName) {
            currentProject = Object.keys(projects)[0] || "";
            document.querySelector("#current-project-name").textContent = currentProject;
        }
        renderProject();
        renderTask();
    }
}


document.querySelector("#add-project-btn").addEventListener("click", () => {
    openModal('add-project-modal');
});

document.querySelector("#submit-project").addEventListener("click", () => {
    const projectName = document.querySelector("#new-project-name").value.trim();
    if (projectName && !projects[projectName]) {
        projects[projectName] = [];
        document.querySelector("#new-project-name").value = "";
        renderProject();
    }
    closeModal('add-project-modal');
});

document.querySelector("#add-task-btn").addEventListener("click", () => {
    updateTaskProjectSelect();
    openModal('add-task-modal');
});

document.querySelector("#submit-task").addEventListener("click", () => {
    const title = document.querySelector("#task-name").value.trim();
    const description = document.querySelector("#task-desc").value.trim();
    const dueDate = document.querySelector("#task-date").value;
    const priority = document.querySelector("#task-priority").value;
    const project = document.querySelector("#task-project").value;

    if (title && projects[project]) {
        const newTask = createToDo(title, description, dueDate, priority, project);
        projects[project].push(newTask);
        renderTask();
    }

    closeModal('add-task-modal');
});

renderProject();
renderTask();
