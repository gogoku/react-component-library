import React from 'react';
import { PropTypes } from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';
import CardBase from './CardBase';
import Cardstyles from './Card.module.css';

export default function CardNew(props) {
  const { children, size, type } = props;
  const footerType = `footer${type}`;
  return (
    <CardBase size={size} type={type}>
      <div className={`${Cardstyles.cardContent}`}>{children}</div>
      <div className={`${Cardstyles.cardFooter} ${Cardstyles[footerType]}`}>
        <div>More Info</div>
        <div>
          <FaInfoCircle style={{ paddingTop: '2px', paddingLeft: '4px' }} />
        </div>
      </div>
    </CardBase>
  );
}

CardNew.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  type: PropTypes.string,
};

CardNew.defaultProps = {
  type: 'primary',
};
