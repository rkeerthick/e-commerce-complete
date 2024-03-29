import React from "react";

// import Cart from "../../assets/svg/Cart.svg";
import Cart from "../SVG/Cart";
import styled, { keyframes } from "styled-components";

interface LoadingPropType {
  label?: string | undefined;
  hasLabel?: boolean | undefined;
  image?: JSX.Element;
}

const ShakeImage = keyframes`
0% {  transform: rotate(5deg); } 
25% { transform: rotate(-6deg); } 
50% { transform: rotate(5deg); } 
75% { transform: rotate(-6deg); } 
100% { transform: rotate(5deg); } 
`;

const LoadingImage = styled.div`
  width: auto;
  animation: ${ShakeImage} 0.5s linear infinite;
`;

const Loading = ({ hasLabel, label, image = <Cart width="50px" height="50px" /> }: LoadingPropType) => {
  console.log(hasLabel, "haslabel");
  return (
    <>
      <LoadingImage>{image}</LoadingImage>
    </>
  );
};

export default Loading;
