import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import StatCardList from '../../components/StatCardList/StatCardList';
import Header from '../../components/Header/Header';

export default class Home extends Component {
  render() {
    const stats = [
      { amount: '7', title: 'Running Ads' },
      { amount: '19k', title: 'Total Likes' },
      { amount: '8k', title: 'Total Post Reach' },
    ]
    return (
      <div className={styles.Home}>
        <Header />
        <main>
          <StatCardList stats={stats} />
          <div className={styles.chart}>

          </div>
          <div className={styles.links}>
            <Link to="/running">Running Ads</Link>
            <Link to="/all">All Ads</Link>
            <Link to="/create">Create Ads</Link>
          </div>
        </main>
      </div>
    )
  }
}
