import React, { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelect from "./components/LanguageSelect";
// import "./App.css";
import TranslationLogic from "./services/TranslationLogic";
import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import TranslatedText from "./components/TranslatedText";

const App: React.FC = () => {
  const [text, setText] = useState<string>(""); // user input text
  const [sourceLang, setSourcelang] = useState<string>("en"); // set Source language to english
  const [targetLang, setTargetLang] = useState<string>("es"); // set Target language to spanish
  const [translatedText, setTranslatedText] = useState<string>(""); // Translated Text

  const handleTraslationResult = (translateText: string) => {
    setTranslatedText(translateText);
  };

  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1} textAlign="center" mb="5">
        Traducción
      </Heading>
      <Box
        p={4} // Padding
        bg="#FFF5EE" // Light gray background
        borderRadius="md" // Rounded corners
        borderWidth={10} // Side border width
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
      </Box>
    </>
  );
};

export default App;
