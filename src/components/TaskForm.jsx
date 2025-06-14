import { useState } from 'react';
import { Plus } from 'lucide-react';

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
    <div className="mb-8 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 pl-12 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200 text-slate-800 placeholder-slate-400 font-medium"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
          <Plus className="h-5 w-5" />
        </span>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <span className="text-red-600 text-sm font-medium">{error}</span>
        </div>
      )}
      
      <textarea
        placeholder="Add a description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/70 backdrop-blur-sm resize-none transition-all duration-200 text-slate-800 placeholder-slate-400 font-medium mb-6"
        rows="3"
      />
      
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25"
      >
        <Plus className="h-5 w-5" />
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;