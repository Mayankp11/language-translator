import { Textarea } from "@chakra-ui/react";

interface TranslatedTextProps {
  translatedText: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ translatedText }) => {
  return (
    <Textarea
      value={translatedText}
      isReadOnly //Because text will only be dispalyed
      // size="md"
      placeholder="The translated text ..."
      borderColor="black"
      borderWidth="1px"
      height="100%"
      borderRadius="4px"
      resize="none"
      // _focus={{ borderColor: "black", boxShadow: "none" }} // Keep black border on focus and remove default box shadow
      // _hover={{ borderColor: "black" }} // Keep border color black on hover
    
    />
  );
};

export default TranslatedText;
