export function createToDo(title) {
    return {
        title,
        completed: false,
        createdAt: new Date().toISOString(),

        toggleComplete() {
            this.completed = true;
        }
    };
}