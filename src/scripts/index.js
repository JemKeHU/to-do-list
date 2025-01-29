import { createToDo } from "./main_code"; // Import function to create a new To-Do task
import '../styles/style.css'; // Import styles

// Function to save data to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem("projects", JSON.stringify(projects)); // Save 'projects' object to localStorage
    } catch (e) {
        console.error("Error saving to localStorage", e); // Log error if saving fails
    }
}

// Function to load data from localStorage
function loadFromLocalStorage() {
    try {
        const savedProjects = localStorage.getItem("projects"); // Get 'projects' data from localStorage
        if (savedProjects) {
            return JSON.parse(savedProjects); // Parse and return the saved projects
        }
    } catch (e) {
        console.error("Error loading from localStorage", e); // Log error if loading fails
    }
    return {}; // Return an empty object if no saved projects
}

// Load the projects from localStorage
const projects = loadFromLocalStorage();
console.log("Loaded projects: ", projects);

// Set the current project to the first project or a default value
let currentProject = Object.keys(projects).length > 0 ? Object.keys(projects)[0] : "Create and click"; 
let taskToEdit = null; // Placeholder for task to edit
let projectToEdit = null; // Placeholder for project to edit

// Close modal events
document.querySelector("#close-edit-task-modal").addEventListener("click", () => {
    closeModal('edit-task-modal'); // Close task edit modal
});

document.querySelector("#close-edit-project-modal").addEventListener("click", () => {
    closeModal('edit-project-modal'); // Close project edit modal
});

document.querySelector("#close-add-task-modal").addEventListener("click", () => {
    closeModal('add-task-modal'); // Close task add modal
});

document.querySelector("#close-add-project-modal").addEventListener("click", () => {
    closeModal('add-project-modal'); // Close project add modal
});

// Function to open a modal by ID
function openModal(modalId) {
    console.log(`Opening modal: ${modalId}`); // Log modal opening
    document.querySelector(`#${modalId}`).style.display = 'flex'; // Display the modal
}

// Function to close a modal by ID
function closeModal(modalId) {
    console.log(`Closing modal: ${modalId}`); // Log modal closing
    document.querySelector(`#${modalId}`).style.display = 'none'; // Hide the modal
}

// Function to update the task project selection dropdown
function updateTaskProjectSelect() {
    const taskProjectSelect = document.querySelector("#task-project");
    taskProjectSelect.innerHTML = ""; // Clear existing options
    Object.keys(projects).forEach((projectName) => {
        const option = document.createElement("option"); // Create a new option element
        option.value = projectName; // Set the option value to the project name
        option.textContent = projectName; // Set the option text to the project name
        taskProjectSelect.appendChild(option); // Append option to the dropdown
    });
}

// Function to render all the projects
function renderProject() {
    const projectList = document.querySelector("#project-list");
    const currentProjectName = document.querySelector("#current-project-name");

    projectList.innerHTML = ""; // Clear the project list

    Object.keys(projects).forEach((projectName) => {
        const container = document.createElement("div");
        container.setAttribute("class", "project-card"); // Create a container for each project

        const li = document.createElement("li");
        li.textContent = projectName; // Display the project name

        // Style the current project
        if (projectName === currentProject) {
            li.style.fontWeight = "bold";
            li.style.cursor = "default";
        } else {
            li.style.cursor = "pointer";
            li.addEventListener("click", () => {
                if (currentProject !== projectName) {
                    currentProject = projectName; // Change current project
                    currentProjectName.textContent = currentProject; // Update the current project name
                    renderTask(); // Re-render the tasks for the new project
                    renderProject(); // Re-render the projects list
                }
            });
        }

        // Button to edit a project
        const editProjectBtn = document.createElement("button");
        editProjectBtn.textContent = "✏️";
        editProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            projectToEdit = projectName;
            openEditProjectModal(projectName); // Open project edit modal
        });

        // Button to delete a project
        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "❌";
        deleteProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteProject(projectName); // Delete the project
        });

        li.appendChild(editProjectBtn); // Append the edit button
        li.appendChild(deleteProjectBtn); // Append the delete button
        container.appendChild(li); // Append the list item to the container
        projectList.appendChild(container); // Append the container to the project list
    });
}

// Function to render all tasks of the current project
function renderTask() {
    const list = document.querySelector("#todo-list");
    list.innerHTML = ""; // Clear the task list

    if (projects[currentProject]) {
        projects[currentProject].forEach((todo, index) => {
            const li = document.createElement("li");

            // Add task details to the list item
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
                <button class="edit-task" data-index="${index}">✏️</button>
                <button class="delete-task" data-index="${index}">❌</button>
            `;

            // Delete task event
            li.querySelector(".delete-task").addEventListener("click", (e) => {
                e.stopPropagation();
                projects[currentProject].splice(index, 1); // Remove the task from the project
                renderTask(); // Re-render the task list
                saveToLocalStorage(); // Save the updated projects
            });

            // Edit task event
            li.querySelector(".edit-task").addEventListener("click", (e) => {
                e.stopPropagation();
                openEditTaskModal(index); // Open task edit modal
            });

            // Mark task as completed
            li.querySelector(".task-completed").addEventListener("change", (e) => {
                const taskIndex = e.target.dataset.index;
                projects[currentProject][taskIndex].completed = e.target.checked; // Update the task completion status
            });

            list.appendChild(li); // Append the task to the list
        });
    } else {
        console.error(`Project "${currentProject}" not found.`); // Log error if the project is not found
    }
}

// Function to open the task edit modal
function openEditTaskModal(todo) {
    document.querySelector("#edit-task-name").value = todo.title; // Set task title in the modal
    document.querySelector("#edit-task-desc").value = todo.description; // Set task description
    document.querySelector("#edit-task-date").value = todo.dueDate; // Set task due date
    document.querySelector("#edit-task-priority").value = todo.priority; // Set task priority

    openModal('edit-task-modal'); // Open the task edit modal
}

// Submit edited task event
document.querySelector("#submit-edit-task").addEventListener("click", () => {
    if (taskToEdit) {
        taskToEdit.title = document.querySelector("#edit-task-name").value.trim(); // Update task title
        taskToEdit.description = document.querySelector("#edit-task-desc").value.trim(); // Update description
        taskToEdit.dueDate = document.querySelector("#edit-task-date").value; // Update due date
        taskToEdit.priority = document.querySelector("#edit-task-priority").value; // Update priority

        renderTask(); // Re-render the task list
    }

    closeModal('edit-task-modal'); // Close the modal
});

// Function to open the project edit modal
function openEditProjectModal(projectName) {
    document.querySelector("#edit-project-name").value = projectName; // Set the current project name in the modal
    openModal('edit-project-modal'); // Open the project edit modal
}

// Submit edited project event
document.querySelector("#submit-edit-project").addEventListener("click", () => {
    const newProjectName = document.querySelector("#edit-project-name").value.trim();
    if (newProjectName && projects[currentProject]) {
        projects[newProjectName] = projects[currentProject]; // Rename project
        delete projects[currentProject]; // Delete the old project name
        currentProject = newProjectName; // Update the current project
        document.querySelector("#current-project-name").textContent = currentProject; // Update the displayed project name
        renderProject(); // Re-render the projects list
        renderTask(); // Re-render the tasks
    }

    closeModal('edit-project-modal'); // Close the modal
});

// Function to delete a project
function deleteProject(projectName) {
    if (projects[projectName]) {
        delete projects[projectName]; // Delete the project from the list
        if (currentProject === projectName) {
            currentProject = Object.keys(projects)[0] || ""; // Set a new current project if the current project was deleted
            document.querySelector("#current-project-name").textContent = currentProject; // Update the current project name
        }
        renderProject(); // Re-render the projects list
        renderTask(); // Re-render the tasks
        saveToLocalStorage(); // Save the updated data to localStorage
    }
}

// Event to open the add project modal
document.querySelector("#add-project-btn").addEventListener("click", () => {
    openModal('add-project-modal'); // Open add project modal
});

// Submit new project event
document.querySelector("#submit-project").addEventListener("click", () => {
    const projectName = document.querySelector("#new-project-name").value.trim();
    if (projectName && !projects[projectName]) {
        projects[projectName] = []; // Add a new empty project
        document.querySelector("#new-project-name").value = ""; // Clear input field
        renderProject(); // Re-render the projects list
        saveToLocalStorage(); // Save the new project to localStorage
    }
    closeModal('add-project-modal'); // Close the modal
});

// Event to open the add task modal
document.querySelector("#add-task-btn").addEventListener("click", () => {
    updateTaskProjectSelect(); // Update the task project dropdown
    openModal('add-task-modal'); // Open add task modal
});

// Submit new task event
document.querySelector("#submit-task").addEventListener("click", () => {
    const title = document.querySelector("#task-name").value.trim();
    const description = document.querySelector("#task-desc").value.trim();
    const dueDate = document.querySelector("#task-date").value;
    const priority = document.querySelector("#task-priority").value;
    const project = document.querySelector("#task-project").value;

    if (title && projects[project]) {
        const newTask = createToDo(title, description, dueDate, priority, project); // Create a new task
        projects[project].push(newTask); // Add the task to the selected project
        renderTask(); // Re-render the tasks
        saveToLocalStorage(); // Save the new task to localStorage
    }

    closeModal('add-task-modal'); // Close the modal
});

// Initial render
renderProject(); // Render the list of projects
renderTask(); // Render tasks for the current project
