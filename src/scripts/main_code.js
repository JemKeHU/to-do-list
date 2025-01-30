export function createToDo(title, description, dueDate, priority, project) {
  // Define options for formatting the date and time
  const options = {
    day: "2-digit", // Format the day as two digits
    month: "2-digit", // Format the month as two digits
    year: "numeric", // Use full year
    hour: "2-digit", // Format the hour as two digits
    minute: "2-digit", // Format the minute as two digits
    second: "2-digit", // Format the second as two digits
    hour12: false, // Use 24-hour clock
  };

  // Return the new To-Do object
  return {
    title, // Title of the task
    description, // Description of the task
    dueDate, // Due date for the task
    priority, // Priority level of the task
    project, // Associated project for the task
    completed: false, // Task completion status (false by default)
    createdAt: new Date().toLocaleString("ru-Ru", options), // Date and time the task was created, formatted in Russian

    // Method to toggle the completion status of the task
    toggleComplete() {
      this.completed = true; // Mark the task as completed
    },
  };
}
