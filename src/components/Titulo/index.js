"use client"
import React from 'react';
import styles from './Titulo.module.css'
const Titulo = (
    {text = "default"}) => {
    return (

 <h1 className={styles.h1}>{text} </h1>
 
    )  
}

export default Titulo;