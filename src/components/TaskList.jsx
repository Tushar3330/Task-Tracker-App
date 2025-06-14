import TaskItem from './TaskItem';
import React from 'react';
import { ClipboardList } from 'lucide-react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (

    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
         {tasks.length === 0 ? (
        
        <div className="text-center py-16 px-6">
          <div className="mb-4 p-4 bg-slate-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
            <ClipboardList className="h-10 w-10 text-slate-400" />
          </div>
             <p className="text-slate-500 text-lg font-medium">No tasks found</p>
             <p className="text-slate-400 text-sm mt-1">Add your first task to get started!</p>
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
                task={task}
                toggleTask={toggleTask}
              deleteTask={deleteTask}
 index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;