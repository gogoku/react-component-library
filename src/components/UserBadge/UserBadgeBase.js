import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './UserBadgeStyles.module.css';

export default function UserBadgeBase(props) {
  const { src, name, id, testId, onClick, onFocus, onBlur } = props;
  let badge;
  if (src) {
    badge = <img className={styles.image} src={src} alt="" />;
    // eslint-disable-next-line no-else-return
  } else {
    const nameSplit = name.split(' ');
    const firstInitial = nameSplit[0] ? nameSplit[0][0].toUpperCase() : '';
    const secondInitial = nameSplit[1] ? nameSplit[1][0].toUpperCase() : '';
    badge = <span>{firstInitial + secondInitial}</span>;
  }
  return (
    <button
      onClick={onClick}
      id={id}
      testId={testId}
      className={styles.badgeContainer}
      type="button"
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {badge}
    </button>
  );
}

UserBadgeBase.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  testId: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
