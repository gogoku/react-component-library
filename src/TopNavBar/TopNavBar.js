import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdNotifications } from 'react-icons/md';
import styles from './TopNavBar.module.css';

export default function TopNavBar() {
  return (
    <div className={styles.topNavContainer}>
      <div>
        <GiHamburgerMenu size={24} />
      </div>
      <div>
        <MdNotifications size={24} />
      </div>
    </div>
  );
}
