import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SideNavLegacy.module.css';
import { UserBadge } from '../UserBadge';

const ChildLink = (props) => {
  const { child, parentTitle, getIcons, position } = props;
  //   const mouseDown = (ev) => ev.preventDefault();
  const positionClass = `childContainer_${position}`;
  return (
    <div className={`${styles.childContainer} ${styles[positionClass]}`}>
      <div className={styles.parentTitle}>{parentTitle}</div>
      {child.map((childObj) => (
        <>
          <a
            href={childObj.link}
            // onMouseDown={mouseDown}
            className={styles.childTitle}
          >
            <div className={styles.childIconStyle}>
              {getIcons(childObj.key)}
            </div>
            <div>{childObj.title}</div>
          </a>
        </>
      ))}
    </div>
  );
};

ChildLink.defaultProps = {
  position: 'bottom',
};

const ParentLink = (props) => {
  const { navObj, getIcons } = props;
  return (
    <div className={styles.linksContainer}>
      <span>
        <button type="button" className={styles.linkItem}>
          <span title={navObj.title}>{getIcons(navObj.key)}</span>
          <ChildLink
            child={navObj.children}
            parentTitle={navObj.title}
            getIcons={getIcons}
          />
        </button>
      </span>
    </div>
  );
};

const Logo = ({ src }) => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img src={src} alt="logo" />
      </a>
    </div>
  );
};

export default function SideNav(props) {
  const { navJson, getIcons, logo } = props;
  const [usrBadgeActive, setUserBadge] = useState(false);
  const onFocusBadge = () => setUserBadge(true);
  const onBlurBadge = () => setUserBadge(false);

  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <Logo src={logo} />
        {navJson.map((parent) => (
          <ParentLink navObj={parent} key={parent.key} getIcons={getIcons} />
        ))}
      </div>
      <div className={styles.menuContainer}>
        <div className={usrBadgeActive ? styles.userBadge_active : ''}>
          <UserBadge
            name="Gokul P"
            src="https://img.icons8.com/plasticine/2x/user.png"
            onFocus={onFocusBadge}
            onBlur={onBlurBadge}
          />
          <ChildLink
            child={[{ title: 'Profile Settings', key: 'user_profile' }]}
            parentTitle="User"
            getIcons={getIcons}
            position="top"
          />
        </div>
      </div>
    </div>
  );
}

SideNav.propTypes = {
  navJson: PropTypes.array,
  getIcons: PropTypes.func,
};

SideNav.defaultProps = {};
