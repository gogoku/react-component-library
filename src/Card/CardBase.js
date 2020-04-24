import React from 'react';
import { PropTypes } from 'prop-types';
import Cardstyles from './Card.module.css';

export default function CardBase(props) {
  const { children, size, type, className } = props;

  return (
    <div
      className={`${Cardstyles.Card} ${Cardstyles[size]} ${Cardstyles[type]}`}
    >
      <div>{children}</div>
    </div>
  );
}

CardBase.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

CardBase.defaultProps = {
  size: 'small',
  type: 'default',
};
