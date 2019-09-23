import React, { Component } from 'react';
import styles from './Create.module.css';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

import AdList from '../../components/AdList/AdList';

export default class Create extends Component {
  state = {
    ads: [
      { image: "", title: "Get Porpular using wedeyy porpular", description: "Be known by 50 or more people a day with #300", url: "/new" },
      { image: "", title: "Get People to install your Application", description: "Be known by 50 or more people a day with #300", url: "/new" },
      { image: "", title: "Get more website visitors.", description: "Be known by 50 or more people a day with #300", url: "/new" },
      { image: "", title: "Boost your post", description: "Get more people to engage with your post.", url: "/new" },
      { image: "", title: "Get more booking.", description: "Get more people to click book now.", url: "/new" },
    ]
  }

  render() {
    return (
      <div className={styles.Create}>
        <Header title="Create Ads" />
        <main>
          <Title title="What do you want to create?" />
          <AdList ads={this.state.ads} />
        </main>
      </div>
    )
  }
}
