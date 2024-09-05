"use client"
import React from 'react';
import styles from './Input.module.css'; 

const Input = ({ label = "default", type = "text", name = "default", clase = "", placeholder = "default" }) => {
    if (type === "textarea") {
        return (
            <>
                <label className={styles.label}>{label}</label>
                <textarea name={name} style={{width:"100%", minHeight:"65px"}}className={`${styles.input} ${styles.clase}`}></textarea>
            </>
        )
    }

    return (
        <>
            <label className={styles.label}>{label}</label>
            <input type={type} name={name} className={`${styles.input} ${styles.clase}`} placeholder={placeholder} />
        </>
    )
}

export default Input;