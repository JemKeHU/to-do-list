export function createToDo(title, description, dueDate, priority, project) {
    const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    };

    return {
        title,
        description,
        dueDate,
        priority,
        project,
        completed: false,
        createdAt: new Date().toLocaleString('ru-Ru', options),

        toggleComplete() {
            this.completed = true;
        }
    };
}