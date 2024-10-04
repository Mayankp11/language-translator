import { Button } from "@chakra-ui/react";
import React from "react";


interface refreshProps {
    onRefresh : () => void;
    isLoading : boolean;
}

export const RefreshButton : React.FC<refreshProps> = ({onRefresh, isLoading}) => {
  return (
    <Button
    onClick={onRefresh} // Call the refresh function when clicked
      isLoading={isLoading} // Display loading state
      loadingText="Refreshing" // Text to display while loading
      colorScheme="teal" // Set color scheme
      variant="outline" // Outline variant
      spinnerPlacement="start" // Position the spinner at the start
      mt={4} // Margin top for spacing
    >
        Refresh
    </Button>

    
    
  )

}

export default RefreshButton;
