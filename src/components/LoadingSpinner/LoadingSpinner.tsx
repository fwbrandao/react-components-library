import React from 'react';
// import { default as spinner } from '../../../assets/images/svg/spinner.svg';
const spinner = require('../../assets/images/svg/spinner.svg') as string;
import styled from 'styled-components';

export interface LoadingSpinnerProps {
    /**
     * Hide / Show spinner
     */
    show?: string | boolean;
}

const LoadingSpinner = ({ show = false }: LoadingSpinnerProps) => {
    return show ? (
        <LoadingSpinnerWrapper>
            <img src={spinner} alt="spinner" />
        </LoadingSpinnerWrapper>
    ) : null;
};

const LoadingSpinnerWrapper = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
`;

export default LoadingSpinner;
