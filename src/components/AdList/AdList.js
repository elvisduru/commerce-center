import React from 'react';
import styles from './AdList.module.css';
import Ad from './Ad/Ad';

const AdList = ({ ads }) => {
  return (
    <div className={styles.AdList}>
      {ads.map(({ image, title, description, url }, index) => (
        <Ad key={index} url={url} image={image} title={title} description={description} />
      ))}
    </div>
  )
}

export default AdList;
