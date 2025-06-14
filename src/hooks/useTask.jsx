import { useState, useEffect, useCallback } from 'react';
import { filterAndSortTask } from '../utils/taskUtil';

function useTask() {
  //all tasks can be stored here and we will be using these hooks overall the app
  //saving to localStorage to persist data a
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem('taskflow-tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.warn('Loading task failed:', error);
      return [];
    }
  });
  
  const [filter, setFilter] = useState('All');

// savung task if chages
  useEffect(() => {
    try {
      localStorage.setItem('taskflow-tasks', JSON.stringify(tasks));
    } catch (error) {
      console.warn('Failed to save tasks to localStorage:', error);
    }
  }, [tasks]);

  //new task
  const addTask = useCallback((title, description = '') => {
    const newTask = {
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      timestamp: new Date().toISOString(),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }, []);

  //make task complete or incomplete
  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id 
          ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() } 
          : task
      )
    );
  }, []);

  // Deletion of task by id
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);


//  filtering all task stored 
  const filteredTasks = filterAndSortTask(tasks, filter);

  //overview and progres
  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length,
    completionRate: tasks.length > 0 ? Math.round((tasks.filter(task => task.completed).length / tasks.length) * 100) : 0
  };

  return {
    tasks: filteredTasks,allTasks: tasks,taskStats,filter,setFilter,addTask,toggleTask,deleteTask,
 
  };
}

export default useTask;