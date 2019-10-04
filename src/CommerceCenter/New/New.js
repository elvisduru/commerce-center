import React, { Component } from 'react';
import styles from './New.module.css';
import Header from '../../components/Header/Header';
import Widget from '../Widget/Widget';
import Title from '../../components/Title/Title';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

export default class New extends Component {
  state = {
    uploading: false,
    images: [],
    selectedImg: null,
    fields: {
      btnType: "",
      title: "",
      website: "",
      description: "",
      linkLabel: "",
      linkAddress: "",
      location: "",
      male: false,
      female: false,
      age: {
        min: 0,
        max: 65
      }
    }
  }


  handleImageUpload = e => {
    const files = Array.from(e.target.files);

    // Setting uploading state to true. Can be useful for showing progress or spinner till image is uploaded to server
    this.setState({ uploading: true });

    files.forEach(file => {
      if (!file.type.startsWith('image/')) { return }
      const image = window.URL.createObjectURL(file);
      const images = [...this.state.images];
      images.push(image);
      this.setState({ images })
      this.setState({ selectedImg: image })
    })

    // After sending image to server set uploading state to false
    this.setState({ uploading: false });
  }

  removeImage = (image) => {
    const images = this.state.images.filter(el => el !== image)
    if (this.state.selectedImg === image) {
      this.setState({ selectedImg: images[images.length - 1] })
    }
    this.setState({ images })
  }

  selectImg = (image) => this.setState({ selectedImg: image })

  handleInput = e => {
    const fields = { ...this.state.fields }
    if (e.target.type === 'checkbox') {
      fields[e.target.name] = e.target.checked;
    } else {
      fields[e.target.name] = e.target.value;
    }
    this.setState({ fields })
  }

  handleSubmit = () => {
    const ad = {
      images: this.state.images,
      btnType: this.state.fields.btnType,
      title: this.state.fields.title,
      website: this.state.fields.website,
      description: this.state.fields.description,
      linkLabel: this.state.fields.linkLabel,
      linkAddress: this.state.fields.linkAddress,
      location: this.state.fields.location,
      male: this.state.fields.male,
      female: this.state.fields.female,
      age: this.state.fields.age
    }

    this.props.createAd(ad)
    this.props.history.push('/preview');
  }

  render() {
    return (
      <div className={styles.New}>
        <Header title="Set Ad Details" />
        <main>
          <Widget images={this.state.images} selectedImg={this.state.selectedImg} handleImageUpload={this.handleImageUpload} removeImage={this.removeImage} selectImg={this.selectImg} />
          <Title title="ADD DETAILS" height="50px" />
          <div className={styles.details}>
            <input name="title" type="text" placeholder="Title*" onChange={this.handleInput} />
            <input name="website" type="text" placeholder="Website" onChange={this.handleInput} />
            <textarea name="description" placeholder="Description" onChange={this.handleInput} />
          </div>
          <Title title="ADD BUTTON" height="50px" />
          <div className={styles.details}>
            <select name="btnType" value={this.state.btnType} onChange={this.handleInput}>
              <option value="">Select Button Type</option>
              <option value="link">Link Button</option>
            </select>
            <input name="linkLabel" type="text" placeholder="Link Label*" onChange={this.handleInput} />
            <input name="linkAddress" type="text" placeholder="Link Address*" onChange={this.handleInput} />
          </div>
          <Title title="LOCATION" height="50px" />
          <div className={styles.details}>
            <input name="location" type="text" placeholder="Location" onChange={this.handleInput} />
            <label htmlFor="male">
              <input type="checkbox" name="male" id="male" checked={this.state.fields.male} onChange={this.handleInput} />
              Male
            </label>
            <label htmlFor="female">
              <input type="checkbox" name="female" id="female" checked={this.state.fields.female} onChange={this.handleInput} />
              Female
            </label>
            <div className={styles.range}>
              <p>Age Range:</p>
              <InputRange
                maxValue={100}
                minValue={0}
                formatLabel={value => `${value} yrs`}
                value={this.state.fields.age}
                onChange={value => {
                  const fields = { ...this.state.fields }
                  fields.age = value
                  this.setState({ fields })
                }}
                onChangeComplete={value => console.log(value)} />
            </div>
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        </main>
      </div>
    )
  }
}
