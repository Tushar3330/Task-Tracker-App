import { CheckCircle, Trash2 } from 'lucide-react';

function TaskItem({ task, toggleTask, deleteTask, index }) {
  return (
    <div
      className={`group flex items-center p-6 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-all duration-300 ${
              task.completed ? 'opacity-75' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
            <button
        onClick={() => toggleTask(task.id)}
        className="mr-4 focus:outline-none transform hover:scale-110 transition-transform duration-200"
      >
        <CheckCircle
          className={`h-7 w-7 ${
            task.completed 
              ? 'text-emerald-500 fill-emerald-500' 
              : 'text-slate-300 hover:text-emerald-400'
          } transition-colors duration-200`}
        />
      </button>
      
      <div className="flex-1 min-w-0">
        <h4 className={`text-lg font-semibold mb-1 ${
          task.completed 
            ? 'line-through text-slate-500' 
            : 'text-slate-800'
        } transition-all duration-200`}>
          {task.title}
        </h4>
        
        {task.description && (
          <p className={`text-sm mb-2 ${
            task.completed ? 'text-slate-400' : 'text-slate-600'
          } transition-all duration-200`}>
            {task.description}
          </p>
        )}
        
        <small className="text-xs text-slate-400 font-medium">
          Created: {new Date(task.timestamp).toLocaleString()}
        </small>
      </div>
      
      <button
        onClick={() => deleteTask(task.id)}
        className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-red-500/25 opacity-0 group-hover:opacity-100"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

export default TaskItem;