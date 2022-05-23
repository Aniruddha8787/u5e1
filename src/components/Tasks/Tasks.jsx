import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({ tasks, handleUpdateTask, handleRomvTask }) => {
  // NOTE: do not delete `data-cy` key value pair
   if (tasks.length > 0) {
    return (
      <ul data-cy="tasks" className={styles.tasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleRomvTask={handleRomvTask}
          />
       
        ))}
      </ul>
    );
  }
  else{
  return (
    <>
      
      <div data-cy="tasks-empty" className={styles.empty}>
       <img src="https://rct-101-e1.herokuapp.com/static/media/empty.b0a6b41cd4748982c3c1d1c455e77a6f.svg"
       style={{width:"50px"}} alt="empty task list" />
      <p>
        <b>Empty list</b>
      </p>
      <p>Add a new task above</p>
      </div>
    </>
  );}
};

export default Tasks;