import React, { Component } from 'react';
import styles from './Running.module.css';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

import img1 from '../../images/adImg1.png';
import img2 from '../../images/adImg2.png';
import img3 from '../../images/adImg3.png';
import img4 from '../../images/adImg4.png';
import AdList from '../../components/AdList/AdList';

export default class Running extends Component {
  state = {
    ads: [
      { image: img1, title: "Get to know Banky Wellington the new candidate.", description: "Political Candidate 200k likes.", url: "/" },
      { image: img2, title: "Shop at the Queens Place today.", description: "Store Visit 29 likes.", url: "/" },
      { image: img3, title: "Buy from our store quality and affordable sneakers.", description: "Store Visit 11k likes.", url: "/" },
      { image: img4, title: "Get Porpular using wedeyy porpular", description: "Be known by 50 or more people a day with #300", url: "/" },
      { image: "", title: "Get Porpular using wedeyy porpular", description: "Be known by 50 or more people a day with #300", url: "/" },
    ]
  }

  render() {
    return (
      <div className={styles.Running}>
        <Header title="Running Ads" />
        <main>
          <Title title="All Running Ads" />
          <AdList ads={this.state.ads} />
        </main>
      </div>
    )
  }
}
