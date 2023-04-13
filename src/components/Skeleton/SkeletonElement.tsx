import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

interface SkeletonProps {
  /**
   * The type of the skeleton element e.g. avatar, title ...
   */
  elementType: "text" | "title" | "avatar" | "thumbnail";
}

const getElementTypeStyles = ({ elementType = "" }) => {
  switch (elementType) {
    case "text": {
      return css`
        width: 100%;
        height: 12px;
      `;
    }
    case "title": {
      return css`
        width: 50%;
        height: 20px;
        margin-botton: 15px;
      `;
    }
    case "avatar": {
      return css`
        width: 100px;
        height: 100px;
        border-radius: 50%;
      `;
    }
    case "thumbnail": {
      return css`
        width: 100px;
        height: 100px;
      `;
    }
  }
};

const SkeletonElement = ({ elementType }: SkeletonProps) => {
  console.log("elementType", elementType);
  return (
    <StyledSkeletonElement elementType={elementType}></StyledSkeletonElement>
  );
};

const StyledSkeletonElement = styled.div<{ elementType: string }>`
  background: #ddd;
  margin: 10px 0;
  border-radius: 4px;

  ${(props) => getElementTypeStyles({ elementType: props.elementType })}
`;

SkeletonElement.propTypes = {
  /**
   * The type of the skeleton element e.g. avatar, title ...
   */
  elementType: PropTypes.oneOf(["text", "title", "avatar", "thumbnail"]),
};

SkeletonElement.defaultProps = {
  elementType: "",
};

export default SkeletonElement;
