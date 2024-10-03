import {  Textarea } from "@chakra-ui/react";

// Define the props interface for the component
interface TextInputProps {
    text: string; // This prop will hold the text value
    onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // This prop is a function to handle text changes
}

// Define the functional component with the specified props
const TextInput: React.FC<TextInputProps> = ({ text, onTextChange }) => {
    return (
        <Textarea
        placeholder="Enter text to translate..."
        value={text} // Controlled input
        onChange={onTextChange} // Calls the provided function on change
        //
        />
        
    );
};

export default TextInput; // Export the component for use in other parts of the application
