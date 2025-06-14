import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButton from './components/FilterButton';
import useTask from './hooks/useTask';
import { Analytics } from "@vercel/analytics/next"
function App() {
  const {  tasks, filter, taskStats,  addTask, toggleTask,  deleteTask,  setFilter, } = useTask();


  // Show progress stats if we have tasks
  const renderTaskStats = () => {
    if (taskStats.total === 0) {
      return null;
    }
    return (
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
          <div className="text-sm">
            <span className="text-slate-500 font-medium">Progress: </span>
            <span className="text-slate-700 font-semibold">
              {taskStats.completed} of {taskStats.total} tasks completed
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${taskStats.completionRate}%` }}
            />
          </div>
          
          <span className="text-sm font-bold text-slate-600">
            {taskStats.completionRate}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
       
         <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Task-Tracker
        </h1>
        <p className="text-slate-600 font-medium">
          Organize your day, accomplish your goals
        </p>
      </div>

      {/* add task from here  */}
        <TaskForm addTask={addTask} />
{/* filter the task based on completin  */}
        <FilterButton setFilter={setFilter} activeFilter={filter} />

       {/* //list of tasks  */}
        <TaskList 
          tasks={tasks} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />

      {/* //task overview */}
        {renderTaskStats()}


      </div>
    </div>
  );
}


export default App;