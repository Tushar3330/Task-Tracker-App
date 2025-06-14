//filtering logic so can be applied on the task we saved using hooks
 export const filterAndSortTask = (tasks, filter) => {
  return tasks

    .filter((task) => {
         if (filter === 'Completed') return task.completed;
            else if (filter === 'Incomplete') return !task.completed;
      return true;
    })
    .sort((a, b) => 
      new Date(b.timestamp) - new Date(a.timestamp));
};



