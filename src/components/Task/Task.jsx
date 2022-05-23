import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ task, handleUpdateTask, handleRomvTask }) => {
  // NOTE: do not delete `data-cy` key value pair
   function toggleTaskStatus() {
    handleUpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const updateCount = (newCount) => {
    if (newCount > 0) {
      handleUpdateTask({
        ...task,
        count: newCount,
      });
    }
  };
  return (
    <li data-cy="task" className={styles.task}
    >
      <input type="checkbox" data-cy="task-checkbox"
       onChange={toggleTaskStatus}
            checked={task.done} />
               <div className={styles.taskCheckboxEl}></div>
      <div data-cy="task-text" className={styles.name}>
                  {task.text}
      </div>
      {/* Counter here */}
       <Counter taskId={task.id} count={task.count} updateCount={updateCount} />
   
      <button data-cy="task-remove-button"
       onClick={() => handleRomvTask(task.id)}><i class="fa-solid fa-xmark"></i></button>
    </li>
  );
};

export default Task;