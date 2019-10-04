import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './CommerceCenter/Home/Home';
import Running from './CommerceCenter/Running/Running';
import All from './CommerceCenter/All/All';
import Create from './CommerceCenter/Create/Create';
import New from './CommerceCenter/New/New';
import Preview from './CommerceCenter/Preview/Preview';

class App extends Component {
  state = {
    ads: [],
    newAd: null
  }

  submitAd = (ad) => {
    const ads = [...this.state.ads];
    ads.push(ad);
    this.setState({ ads })
  }

  createAd = (newAd) => {
    this.setState({ newAd })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* Wedeyy Menu goes in here */}
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/running" component={Running} />
              <Route exact path="/all" component={All} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/new" render={(props) => <New {...props} createAd={this.createAd} />} />
              <Route exact path="/preview" render={(props) => <Preview {...props} newAd={this.state.newAd} submitAd={this.submitAd} />} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
