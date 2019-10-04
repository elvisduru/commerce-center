import React from 'react';
import styles from './SectionHeader.module.css';
import { Link } from 'react-router-dom';

const SectionHeader = ({ img, title, link }) => {
  return (
    <div className={styles.SectionHeader}>
      <div className={styles.left}>
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
      {link ? <Link to="/create">Edit</Link> : null}
    </div>
  )
}

export default SectionHeader
