// AppBackground.tsx
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";

// Define the keyframes for the gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Define the animated background component
const AppBackground: React.FC = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
       bgGradient="linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4, #fcb045, #fd1d1d, #833ab4, #00c6ff)"
      bgSize="400% 400%"  // Creates a large area for gradient transition
      animation={`${gradientAnimation} 10s ease infinite`} // Set animation duration and easing
      position="fixed"    // Position it to cover the whole screen
      top={0}
      left={0}
      zIndex={-1}         // Place it behind other content
    />
  );
};

export default AppBackground;
