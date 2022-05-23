import React from "react";
import data from "../data/tasks.json";
import { v4 as uuid} from "uuid";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks"
import AddTask from "./AddTask/AddTask"
const TaskApp = () => {
 
  // NOTE: do not delete `data-cy` key value pair

  const [tasks, setTasks] = React.useState(data);

  const addTask = (newTask) => {
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        id: uuid(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleRomvTask = (taskId) => 
  {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setTasks(newTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    let newTasks = tasks.reduce((acc, crr) => {
      if (crr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(crr);
      }
      return acc;
    }, []);
    setTasks([...newTasks]);
  };

  return (
    <div data-cy="task-app" className={styles.taskApp}>

     <div className={styles.taskApp}>
        <TaskHeader tasks={tasks} />
   
         <AddTask addTask={addTask} />
        <div className={styles.taskBody}> 
          <Tasks
            tasks={tasks}
            handleRomvTask={handleRomvTask}
            handleUpdateTask={handleUpdateTask}
          />
        </div>
      </div>
          

    
</div>
  );
};

export default TaskApp;
