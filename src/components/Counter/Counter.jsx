import React from "react";
import styles from "./counter.module.css";

const Counter = ({ taskId, count, updateCount }) => {
  // sample value to be replaced
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"
      className={styles.plus}
       onClick={() => updateCount(count + 1)}>+</button>
      <span data-cy="task-counter-value"
       className={styles.con}>{count}</span>
      <button data-cy="task-counter-decrement-button"
      onClick={() => updateCount(count - 1)}
      className={styles.neg}>-</button>
    </div>
  );
};

export default Counter;