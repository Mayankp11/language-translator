import { Textarea } from "@chakra-ui/react";

// Define the props interface for the component
interface TextInputProps {
  text: string; // This prop will hold the text value
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // This prop is a function to handle text changes
}

// Define the functional component with the specified props
const TextInput: React.FC<TextInputProps> = ({ text, onTextChange }) => {
  return (
    <Textarea
      value={text} //Prop
      onChange={onTextChange} //Prop
      borderColor="black"
      borderWidth="1px"
      placeholder="Enter text to translate..."
      borderRadius="4px"
      height="100%"
      resize="none"
    //   _placeholder={{ color: "gray.400" }}
    //   _focus={{ borderColor: "black", boxShadow: "none" }} // Keep black border on focus and remove default box shadow
    //   _hover={{ borderColor: "black" }} // Keep border color black on hover
      //
    />
  );
};

export default TextInput; // Export the component for use in other parts of the application
