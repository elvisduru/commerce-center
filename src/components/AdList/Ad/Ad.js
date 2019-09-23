import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Ad.module.css';

const Ad = ({ image, title, description, url }) => {
  return (
    <div className={styles.Ad}>
      <Link to={url}>
        <img src={image} alt="" />
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Ad;
