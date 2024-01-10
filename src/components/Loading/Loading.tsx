import React from "react";

// import Cart from "../../assets/svg/Cart.svg";
import Logo from '../../assets/commerce.png'
import styled, { keyframes } from "styled-components";

interface LoadingPropType {
  label?: string | undefined;
  hasLabel?: boolean | undefined;
}

const ShakeImage = keyframes`
0% {  transform: rotate(5deg); } 
25% { transform: rotate(-6deg); } 
50% { transform: rotate(5deg); } 
75% { transform: rotate(-6deg); } 
100% { transform: rotate(5deg); } 
`;

const LoadingImage = styled.img`
  height: 100px;
  width: auto;
  animation: ${ShakeImage} 0.5s linear infinite;
`;

const Loading = ({ hasLabel, label }: LoadingPropType) => {
  console.log(hasLabel, "haslabel");
  return (
    <>
      {/* {hasLabel && <Typography variant="h6" gutterBottom>{label}</Typography>}
      <CircularProgress /> */}
      <LoadingImage src={Logo} />
    </>
  );
};

export default Loading;
