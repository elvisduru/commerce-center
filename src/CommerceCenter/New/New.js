import React, { Component } from 'react';
import styles from './New.module.css';
import Header from '../../components/Header/Header';

export default class New extends Component {
  render() {
    return (
      <div className={styles.New}>
        <Header title="Set Ad Details" />
      </div>
    )
  }
}
