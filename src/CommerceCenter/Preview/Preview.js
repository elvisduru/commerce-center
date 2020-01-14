import React, { Component, Fragment } from 'react';
import styles from './Preview.module.css';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
// import moment from 'moment';

import cardImg from '../../images/card_1.svg';
import eventImg from '../../images/ic_event_24px.svg';
import personImg from '../../images/ic_person_outline_24px.svg';
import addImg from '../../images/ic_add_24px.svg';
import peopleImg from '../../images/profiles_2.svg';
import picFolderImg from '../../images/pic_folder.svg';
import Slider from '../../components/Slider/Slider';

import img1 from '../../images/adImg1.png';
import img2 from '../../images/adImg2.png';

export default class Preview extends Component {

  state = {
    budget: "300",
    newCard: {
      pin: {
        one: "",
        two: "",
        three: "",
        four: ""
      },
      month: "",
      year: "",
      cvv: ""
    },
    cards: [
      { pin: "6271132111084567", type: "VISA" },
      { pin: "4217132111084567", type: "MASTER" },
    ],
    createCard: false
  }

  handleBudget = e => {
    this.setState({ budget: e.target.value })
  }

  handleCreateCard = () => {
    this.setState(prevState => ({ createCard: !prevState.createCard }));
  }

  handlePinChange = (evt) => {
    const monthInput = document.querySelector(`.${styles.month}`);
    if (evt.target.value.length > 4) {
      if (evt.target.name === "four") {
        monthInput.focus();
      } else {
        evt.target.nextSibling.focus()
      }
      return;
    } else {
      const newCard = Object.assign({}, this.state.newCard);
      newCard["pin"][evt.target.name] = evt.target.value;
      this.setState({ newCard })
    }
  }

  handleMonth = evt => {
    if (evt.target.value.length > 2) {
      evt.target.nextSibling.nextSibling.focus();
      return;
    } else {
      const newCard = Object.assign({}, this.state.newCard);
      newCard["month"] = evt.target.value;
      this.setState({ newCard })
    }
  }

  handleYear = evt => {
    const cvvInput = document.querySelector(`.${styles.cvv}`);
    if (evt.target.value.length > 4) {
      cvvInput.focus();
      return;
    } else {
      const newCard = Object.assign({}, this.state.newCard);
      newCard["year"] = evt.target.value;
      this.setState({ newCard })
    }
  }

  handleCVV = evt => {
    if (evt.target.value.length > 3) {
      return;
    }
    const newCard = Object.assign({}, this.state.newCard);
    newCard["cvv"] = evt.target.value;
    this.setState({ newCard })
  }

  handleAddCard = () => {
    const newCard = Object.assign({}, this.state.newCard);
    if (newCard.cvv && newCard.month && newCard.year && newCard.pin.one && newCard.pin.two && newCard.pin.three && newCard.pin.four) {
      const cards = [...this.state.cards];
      if (newCard.pin.one[0] === '4') {
        newCard.type = "VISA"
      } else {
        newCard.type = "MASTER"
      }
      newCard.pin = newCard.pin.one + newCard.pin.two + newCard.pin.three + newCard.pin.four;
      cards.unshift(newCard);
      this.setState({ cards, createCard: false })
    }
  }

  render() {
    const demoAd = {
      images: [img1, img2],
      btnType: 'link',
      title: 'The new Apple Pro Laptop core i8 9th Generation.',
      website: 'https://apple.com',
      description: 'Apple Inc.',
      linkLabel: 'BUY NOW',
      linkAddress: 'https://apple.com',
      location: 'Ikeja, Nigeria',
      male: true,
      female: true,
      age: {
        min: 18,
        max: 65
      }
    }
    const newAd = this.props.newAd || demoAd;
    return (
      <div className={styles.Preview}>
        <Header title="Preview Ad" />
        <main>
          <Title title="Get popular using wedeyy popular" height="50px" />
          <section>
            <SectionHeader title="Ads Preview" img={picFolderImg} link />
            <Slider slides={newAd.images} />
            <div className={styles.description}>
              <div>
                <h4>{newAd.title}</h4>
                <p>{newAd.description}</p>
              </div>
              <a href={`${newAd.linkAddress}`}>{newAd.linkLabel ? newAd.linkLabel : 'Contact Us'}</a>
            </div>
          </section>
          <section>
            <SectionHeader title="Audience" img={peopleImg} link />
            <div className={styles.details}>
              <h3>People you choose through targeting.</h3>
              <div className={styles.audience}>
                <p>Location - Living in: {newAd.location}</p>
                <p>Gender:{newAd.male ? ' Male' : null}{newAd.male && newAd.female ? ',' : null}{newAd.female ? ' Female' : null}</p>
                <p>Age: {newAd.age.min} - {newAd.age.max}.</p>
              </div>
            </div>
          </section>
          <section>
            <SectionHeader title="Daily Budget" img={cardImg} />
            <div className={styles.details}>
              <div className={styles.budget}>
                <div className={styles.formgroup}>
                  <label htmlFor="one">
                    <input type="radio" name="budget" checked={this.state.budget === "300"} onChange={this.handleBudget} value="300" id="one" />
                    &#8358;300
                  </label>
                  <p>Est. 213 - 2k likes per day</p>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="two">
                    <input type="radio" name="budget" onChange={this.handleBudget} value="1810" id="two" />
                    &#8358;1,810
                  </label>
                  <p>Est. 1.2k - 5.7k likes per day</p>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="three">
                    <input type="radio" name="budget" onChange={this.handleBudget} value="3620" id="three" />
                    &#8358;3,620
                  </label>
                  <p>Est. 2.3k - 10.5k likes per day</p>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="four">
                    <input type="radio" name="budget" onChange={this.handleBudget} value="5430" id="four" />
                    &#8358;5,430
                  </label>
                  <p>Est. 3.3k - 14.9k likes per day</p>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="five">
                    <input type="radio" name="budget" onChange={this.handleBudget} value="200" id="five" />
                    Add at least &#8358;200.00 per day
                  </label>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.duration}>
            <SectionHeader title="Duration" img={eventImg} />
            <div className={styles.details}>
              <p className={styles.days}>{this.state.duration || '10 days'}</p>
              <div>
                <p>Run Ads from now till</p>
                <input type="date" name="date" />
              </div>
              <p>You will spend a total sum of &#8358;{this.state.budget}. This ads will run for {this.state.duration}, ending on Feb 8, 2019.</p>
            </div>
          </section>
          <section className={styles.account}>
            <SectionHeader title="Account" img={personImg} />
            <div className={styles.details}>
              <div className={styles.newCard}>
                {this.state.createCard && (
                  <Fragment>
                    <div>
                      {/* <img src={visaIcon} alt="" /> */}
                      <h6>CARD PIN</h6>
                      <div className={styles.pins}>
                        <input type="text" name="one" placeholder="****" onChange={this.handlePinChange} value={this.state.newCard.pin.one} />
                        <input type="text" name="two" placeholder="****" onChange={this.handlePinChange} value={this.state.newCard.pin.two} />
                        <input type="text" name="three" placeholder="****" onChange={this.handlePinChange} value={this.state.newCard.pin.three} />
                        <input type="text" name="four" placeholder="****" onChange={this.handlePinChange} value={this.state.newCard.pin.four} />
                      </div>
                      <div className={styles.userinfo}>
                        <div>
                          <h6>EXPIRE DATE</h6>
                          <p><input className={styles.month} type="text" placeholder="MM" onChange={this.handleMonth} value={this.state.newCard.month} /> / <input className={styles.year} type="text" placeholder="YYYY" onChange={this.handleYear} value={this.state.newCard.year} /></p>
                        </div>
                        <div>
                          <h6>CVV</h6>
                          <p><input type="text" placeholder="***" className={styles.cvv} onChange={this.handleCVV} value={this.state.newCard.cvv} /></p>
                        </div>
                      </div>
                    </div>
                    <button onClick={this.handleAddCard}>Save</button>
                  </Fragment>
                )}
              </div>
              <div className={styles.cards}>
                {this.state.cards.map((card, index) => (
                  <div className={styles.card} style={index === 0 ? { backgroundColor: '#8AC3E8', color: 'white' } : null} key={index}>
                    <p>{card.type}</p>
                    <p>{card.pin.substring(0, 4)}**</p>
                  </div>
                ))}
                <div className={styles.addCardBtn} onClick={this.handleCreateCard} style={{ marginRight: 'unset' }}>
                  <img src={addImg} alt="" />
                  <p>Add Account</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
