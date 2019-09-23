import React from 'react';
import styles from './StatCardList.module.css';
import StatCard from './StatCard/StatCard';

const StatCardList = ({ stats }) => {
  return (
    <div className={styles.StatCardList}>
      {stats.map(({ amount, title }, index) => (
        <StatCard amount={amount} title={title} key={index} />
      ))}
    </div>
  )
}

export default StatCardList;
