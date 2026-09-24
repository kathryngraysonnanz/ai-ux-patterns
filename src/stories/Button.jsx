import React from 'react';
import { Button as KendoButton } from '@progress/kendo-react-buttons';
import PropTypes from 'prop-types';

import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  isDisabled = false,
  label,
  size = 'medium',
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <KendoButton
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </KendoButton>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** Is the button disabled? */
  isDisabled: PropTypes.bool,
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
