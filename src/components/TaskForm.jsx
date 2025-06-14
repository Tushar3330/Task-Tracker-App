import { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    addTask(title, description);
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
      />
      <button
        type="submit"
        className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;