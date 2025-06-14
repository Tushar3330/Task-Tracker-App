function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div
      className={`flex items-center p-4 border-b ${
        task.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="mr-4 h-5 w-5"
      />
      <div className="flex-1">
        <h4 className="text-lg font-medium">{task.title}</h4>
        <p className="text-gray-600">{task.description}</p>
        <small className="text-gray-400">
          Created: {new Date(task.timestamp).toLocaleString()}
        </small>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;