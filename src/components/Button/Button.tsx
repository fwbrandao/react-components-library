import React from "react";
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case 'large': {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

const Button = ({
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" size={size} {...props}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ size: string }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) => getSizeStyles({size: props.size})}
`;

Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'medium',
  label: "Button",
  onClick: undefined,
};

export default Button;
