import React, { Fragment } from 'react';
import styles from './Header.module.css';
import { withRouter } from 'react-router-dom';

import hamburgerIcon from '../../images/hamburger.svg';
import arrowBackIcon from '../../images/arrow-back.svg';
import Logo from '../../images/logo.png';

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div>
        {props.title ? (
          <Fragment>
            <img onClick={() => props.history.goBack()} src={arrowBackIcon} alt="" />
            <h2>{props.title}</h2>
          </Fragment>
        ) : (
            <img src={Logo} alt="" />
          )}
      </div>
      <img src={hamburgerIcon} alt="" />
    </div>
  )
}

export default withRouter(Header);
