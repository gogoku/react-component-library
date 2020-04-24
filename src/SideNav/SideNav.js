import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaAngleLeft } from 'react-icons/fa';
import styles from './SideNav.module.css';

const ChildLink = (props) => {
  const { child, getIcons, isOpen, path, onRouteClick } = props;
  const openStyle = isOpen ? styles.openMenu : '';

  return child.map((childObj) => {
    const clicked = () => {
      onRouteClick(childObj);
    };
    const highlightClass = path === childObj.link ? styles.highlight : '';
    return (
      <div
        key={childObj.key}
        className={`${styles.childContainer} ${openStyle} ${highlightClass}`}
      >
        <button
          type="button"
          onClick={clicked}
          // onMouseDown={mouseDown}
          className={`${styles.childLinkContainer} ${openStyle}`}
        >
          <div className={styles.childIconStyle}>{getIcons(childObj.key)}</div>
          <div>{childObj.title}</div>
        </button>
      </div>
    );
  });
};

ChildLink.defaultProps = {
  position: 'bottom',
};

const ParentLink = (props) => {
  const { navObj, getIcons, path, onRouteClick } = props;
  const [isOpen, toggleOpen] = useState(false);
  const openClass = isOpen ? styles.open : '';
  const toggleChild = () => {
    toggleOpen(!isOpen);
  };
  const clicked = () => {
    onRouteClick(navObj);
  };
  let highlightClass = path === navObj.link ? styles.highlight : '';
  navObj.children.map((childObject) => {
    if (childObject.link === path) {
      highlightClass = styles.highlight;
    }
  });
  const isChildren = !!navObj.children.length;
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={`${styles.linksContainer} ${highlightClass}`}
        onClick={toggleChild}
        role="menuitem"
        tabIndex={0}
      >
        <button
          type="button"
          className={`${styles.linkItem}`}
          onClick={clicked}
        >
          <div title={navObj.title} className={styles.linkIcon}>
            {getIcons(navObj.key)}
          </div>
          <div>{navObj.title}</div>
        </button>

        {isChildren && (
          <div className={`${styles.parentArrow}`}>
            <div className={`${styles.childArrow} ${openClass}`}>
              <FaAngleLeft />
            </div>
          </div>
        )}
      </div>
      <ChildLink
        path={path}
        child={navObj.children}
        parentTitle={navObj.title}
        getIcons={getIcons}
        isOpen={isOpen}
        onRouteClick={onRouteClick}
      />
    </>
  );
};

const Logo = ({ src }) => {
  return (
    <div className={styles.logo}>
      <a href="/">
        {/* <img src={src} alt="logo" /> */}
        FleetMontior
      </a>
    </div>
  );
};

export default function SideNav(props) {
  const { navJson, getIcons, logo, path, onRouteClick } = props;
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <Logo src={logo} />
        {navJson.map((parent) => (
          <ParentLink
            navObj={parent}
            key={parent.key}
            getIcons={getIcons}
            path={path}
            onRouteClick={onRouteClick}
          />
        ))}
      </div>
    </div>
  );
}

SideNav.propTypes = {
  navJson: PropTypes.array,
  getIcons: PropTypes.func,
  logo: PropTypes.string,
  path: PropTypes.string,
  onRouteClick: PropTypes.func,
};

SideNav.defaultProps = {};
