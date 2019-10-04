import React from 'react';
import styles from './Title.module.css';

const Title = ({ title, height }) => <h1 style={{ height }} className={styles.Title}>{title}</h1>

export default Title;
