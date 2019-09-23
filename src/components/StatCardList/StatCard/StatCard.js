import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ amount, title }) => {
  return (
    <div className={styles.StatCard}>
      <h2>{amount}</h2>
      <p>{title}</p>
    </div>
  )
}

export default StatCard;
