"use client"

import React from 'react';
import styles from './Subtitulo.module.css'; 

const Subtitulo = ({ text = "default" }) => {
    return <h2 className={styles.h2}>{text}</h2>;
}

export default Subtitulo;
