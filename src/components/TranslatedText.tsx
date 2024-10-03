import {  Textarea } from "@chakra-ui/react";

interface TranslatedTextProps {
    translatedText: string;
  }

const TranslatedText: React.FC<TranslatedTextProps> = ({translatedText}) => {
  return (
      <Textarea
        value = {translatedText }
        isReadOnly //Because text will only be dispalyed
        size = 'md'
        variant = "outline"
        placeholder = "The translated text ..."
        // _placeholder={{ color: 'gray.400' }} 
      />
    
  );
};

export default TranslatedText;
