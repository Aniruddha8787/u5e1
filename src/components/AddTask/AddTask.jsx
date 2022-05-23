import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input className={styles.addTask} data-cy="add-task-input" type="text" placeholder="Add Task"/>
      <button data-cy="add-task-button"  className="large material-icons">add</button>
    </div>
  );
};

export default AddTask;
