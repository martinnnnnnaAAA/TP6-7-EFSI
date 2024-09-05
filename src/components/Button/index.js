import React from "react";
import styles from "./Button.module.css";
const Button = ({
  text = "default",
  type = "default",
  className = "null",
  EliminarCita,
}) => {
  if (className === "Eliminar") {
    return (
      <button onClick={EliminarCita} type={type} className={styles.buttonA}>
        {text}
      </button>
    );
  }
  else{
    return(
    <button type={type} className={styles.buttonB}>
        {text}
      </button>
      )
  }
};

// return (
//     <button
//         onClick={EliminarCita}
//         type={type}
//         className={styles.button_primary}
//     >
//         {text}
//     </button>
// );

export default Button;
