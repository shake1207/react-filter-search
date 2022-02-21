import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  color?: string;
}

const Wrapper = styled.div`
  padding: 15px 0;
  text-align: center;
`;

const LdsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const WrapperLoading = styled.div<LoadingProps>`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 64px;
  div {
    position: absolute;
    display: block;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${props => props.color || '#f8b6bb'};
    border-radius: 50%;
    border-color: ${props => props.color || '#f8b6bb'} transparent transparent
      transparent;
    box-sizing: border-box;
    animation: ${LdsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    &::nth-child(1) {
      animation-delay: -0.45s;
    }
    &::nth-child(2) {
      animation-delay: -0.3s;
    }
    &::nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

export const Loading: React.FC<LoadingProps> = props => (
  <Wrapper>
    <WrapperLoading {...props}>
      <div />
      <div />
      <div />
      <div />
    </WrapperLoading>
  </Wrapper>
);
export default Loading;
