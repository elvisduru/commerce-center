import React, { Component } from 'react';
import styles from './Widget.module.css';
import camera from '../../images/camera.svg';
import deleteIcon from '../../images/delete.svg';


export default class Widget extends Component {

  render() {
    return (
      <div className={styles.Widget}>
        <div className={styles.Slider}>
          {this.props.images.length < 1 ? (
            <img src={camera} alt="" />
          ) : (
              <div className={styles.imagePreview}>
                <img src={this.props.selectedImg} alt="" />
              </div>
            )}
        </div>
        <div className={styles.uploadBox}>
          {this.props.images.map((image, index) => (
            <div key={index}>
              <img src={image} onClick={() => this.props.selectImg(image)} alt="" />
              <img src={deleteIcon} onClick={() => this.props.removeImage(image)} alt="" />
            </div>
          ))}
          <div className={styles.addBtn}>
            <p onClick={(e) => e.target.nextSibling.click()}>+ ADD PICTURE</p>
            <input type="file" multiple onChange={this.props.handleImageUpload} style={{ display: 'none' }} />
          </div>
        </div>
      </div>
    )
  }
}
