import React, { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelect from "./components/LanguageSelect";
// import "./App.css";
import TranslationLogic from "./services/TranslationLogic";
import {
  Box,
  Flex,
  Heading,
  Highlight,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import TranslatedText from "./components/TranslatedText";
import RefreshButton from "./components/RefreshButton";

const App: React.FC = () => {
  const [text, setText] = useState<string>(""); // user input text
  const [sourceLang, setSourcelang] = useState<string>("en"); // set Source language to english
  const [targetLang, setTargetLang] = useState<string>("es"); // set Target language to spanish
  const [translatedText, setTranslatedText] = useState<string>(""); // Translated Text
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTraslationResult = (translateText: string) => {
    setTranslatedText(translateText);
  };

  // Function to handle refresh action
  const handleRefresh = () => {
    setIsLoading(true); // Set loading state to true
    // Simulate a refresh action (e.g., clearing text or re-fetching data)
    setText(""); // Example action: clearing the input text
    setTranslatedText(""); // Clear the translated text
    setSourcelang("en"); // set lang to english
    setTargetLang("es"); // set target lang to spanish

    // Simulate a delay to mimic a loading process (you can replace this with your actual refresh logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading state back to false after refresh action
    }, 500); // Adjust delay as needed
  };

  return (
    <>
      <Heading
        as="h1"
        size="4xl"
        noOfLines={1}
        textAlign="center"
        mb={5}
        mt={2}
      >
        <Highlight
          query="Traducción"
          styles={{
            px: "2", // Horizontal padding
            py: "1", // Vertical padding
            rounded: "full", // Fully rounded corners
            bg: "green.100", // Background color
          }}
        >
          Traducción
        </Highlight>
      </Heading>
      <Box
        p={4} // Padding
        bg="#f0f8ff" // Light gray background
        borderRadius="md" // Rounded corners
        borderWidth={1} // Side border width
        borderColor="black" // Border color
        boxShadow="md" // Add a shadow
        // minWidth="100px"
        width="100%"
        maxWidth="620px" // Maximum width for the container
        minHeight="500px"
        margin="0 auto" // Center the Box
        color="black" //Ensure text is visible (adjust as needed)
      >
        <Flex direction="row" alignItems="stretch" mt={5} mb={5}>
          <Flex direction="column">
            {/* Box for the "Translate from" label */}
            <Box mb={1} flex="1" width="150px">
              <LanguageSelect
                label="Translate from:"
                selectedLanguage={sourceLang}
                onLanguageChange={(e) => setSourcelang(e.target.value)}
              />
            </Box>

            {/* Box for the Text Input */}
            <Box
              mb={1}
              flex="2"
              width="250px" // Set a specific width
              minHeight="300px"
              boxSizing="border-box"
              // border="1px solid black"  /* Add border here */
              // p={2}  /* Add padding */
            >
              <TextInput
                text={text}
                onTextChange={(e) => setText(e.target.value)}
              />
            </Box>
          </Flex>

          <Box width={20} />

          <Flex direction="column">
            {/* Box for the "Translate to" label */}
            <Box mb={1} flex="1" width="150px">
              <LanguageSelect
                label="Translate to:"
                selectedLanguage={targetLang}
                onLanguageChange={(e) => setTargetLang(e.target.value)}
              />
            </Box>

            {/* Box for the Translated Text */}
            <Box
              flex="2"
              width="250px" // Set a specific width
              minHeight="300px"
              boxSizing="border-box"
            >
              <TranslatedText translatedText={translatedText} />
            </Box>
          </Flex>
        </Flex>

        {/* Translation Logic */}
        <TranslationLogic
          text={text}
          sourceLang={sourceLang}
          targetLang={targetLang}
          onTranslated={handleTraslationResult}
        />
        {/* Refresh Button */}
        <RefreshButton onRefresh={handleRefresh} isLoading={isLoading} />
      </Box>
    </>
  );
};

export default App;
