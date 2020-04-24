import React from 'react';
import { PropTypes } from 'prop-types';
import { FiInfo } from 'react-icons/fi';
import CardBase from './CardBase';
import Cardstyles from './Card.module.css';

export default function Card(props) {
  const { children, size, className } = props;

  return (
    <CardBase size={size}>
      {(props.title || props.info) && (
        <div className={Cardstyles.title}>
          <div className={Cardstyles.titleText}>{props.title}</div>
          <div>
            <FiInfo />
          </div>
        </div>
      )}
      <div className={`${Cardstyles.cardContent} ${className}`}>{children}</div>
    </CardBase>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  info: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
};
