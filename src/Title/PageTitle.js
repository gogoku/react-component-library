import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './title.module.css';

export default function PageTitle({ text }) {
  return <span className={styles.pageTitle}>{text}</span>;
}

PageTitle.propTypes = {
  text: PropTypes.string,
};
