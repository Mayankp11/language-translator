import { RepeatIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

interface RefreshProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export const RefreshButton: React.FC<RefreshProps> = ({
  onRefresh,
  isLoading,
}) => {
  return (
    <IconButton
      icon={<RepeatIcon />} // Render RepeatIcon as an element
      onClick={onRefresh} // Call the refresh function when clicked
      isLoading={isLoading} // Display loading state
      aria-label="Refresh" // Accessibility label
      colorScheme="teal" // Set color scheme
      variant="outline" // Outline variant
      mt={4} // Margin top for spacing
    />
  );
};

export default RefreshButton;
