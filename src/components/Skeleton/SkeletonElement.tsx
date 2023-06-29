import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

interface SkeletonProps {
  /**
   * The type of the skeleton element e.g. avatar, title ...
   */
  elementType: "text" | "title" | "avatar" | "thumbnail";

  /**
   * The theme of the site to be used e.g. dark, light.
   */
  theme: "light" | "dark";
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

const getSkeletonTheme = ({ theme = "" }) => {
  switch (theme) {
    case "light": {
      return css`
        background: #f2f2f2;
      `;
    }
    case "dark": {
      return css`
        background: #444;
      `;
    }
  }
};

const SkeletonElement = ({ elementType="text", theme="light" }: SkeletonProps) => {
  return (
    <StyledSkeletonWrapper theme={theme}>
      <StyledSkeletonElement elementType={elementType} theme={theme} />
      <StyledShimmerWrapper>
        <StyledShimmer theme={theme}/>
      </StyledShimmerWrapper>
    </StyledSkeletonWrapper>
  );
};

const StyledSkeletonElement = styled.div<{
  elementType: string;
  theme: string;
}>`
  background: ${(props) => (props.theme === "dark" ? "#777" : "#ddd")};
  margin: 10px 0;
  border-radius: 4px;

  ${(props) => getElementTypeStyles({ elementType: props.elementType })}
`;

const StyledSkeletonWrapper = styled.div<{ theme: string }>`
  margin: 10px auto;
  padding: 10px 15px;
  border-radius: 4px;
  position: relative;

  ${(props) => getSkeletonTheme({ theme: props.theme })}
`;

const loading = keyframes`
 0% { transform: translateX(-150%) }
 50% { transform: translateX(-60%) }
 100% { transform: translateX(150%) }
`;

const StyledShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loading} 2.5s infinite;
`;

const StyledShimmer = styled.div<{ theme: string }>`
  width: 50%;
  height: 100%;
  background: ${(props) => props.theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.2)"};
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
`;

export default SkeletonElement;
