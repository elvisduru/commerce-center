import React, { Component } from "react";
import styles from "./Slider.module.css";

import arrowSmall from "../../images/left-circled.svg";

export default class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  handlePrevSlide = () => {
    //Sroll to End if at the beginning of Slider
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.props.slides.length - 1,
        translateValue: (this.props.slides.length - 1) * -100
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + 100
    }))
  }

  handleNextSlide = () => {
    // Reset if at end of slider
    if (this.state.currentIndex === this.props.slides.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - 100
    }))
  }

  render() {
    let indicator = this.state.currentIndex + 1;
    return (
      <div className={styles.Slider}>
        <div className={styles.SliderWrapper}
          style={{
            transform: `translateX(${this.state.translateValue}%)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {this.props.slides.map(
            (image, index) => (
              <img src={image} key={index} alt="" />
            )
          )}
        </div>
        <div className={styles.Controls}>
          <button className={styles.leftArrow} onClick={this.handlePrevSlide}>
            <img src={arrowSmall} alt="left-arrow" />
          </button>
          <div>
            {
              [...Array(this.props.slides.length)].map((_, index) => {
                if (index === (indicator - 1)) {
                  return <div key={index} style={{ width: '15px', transition: 'width 0.1s ease-out' }} />
                } else {
                  return <div key={index} />
                }
              })
            }
          </div>
          <button className={styles.leftArrow} onClick={this.handleNextSlide}>
            <img style={{ transform: 'rotate(180deg)' }} src={arrowSmall} alt="right-arrow" />
          </button>
        </div>
      </div>
    );
  }
}
