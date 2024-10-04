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
  const [error, setError] = useState<string>(""); // Error state

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
    setError('');

    // Simulate a delay to mimic a loading process (you can replace this with your actual refresh logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading state back to false after refresh action
    }, 500); // Adjust delay as needed
  };

  return (
    <>
    {/* Title */}
      <Heading
        as="h1"
        size="4xl"
        // noOfLines={1}
        textAlign="center"
        mb={5}
        mt={7}
      >
        <Highlight
          query="Mate"
          styles={{
            px: "2", // Horizontal padding
            py: "1", // Vertical padding
            rounded: "full", // Fully rounded corners
            bg: "green.100", // Background color
          }}
        >
          TranslateMate
        </Highlight>
      </Heading>
      {/* -x-x-x--x-End of Title-x-x-x-x-x- */}

      {/* App Container */}
      <Box
      mt="20px"
        p={{ base: 2, md: 4 }} // Padding: 2 on small screens, 4 on medium and larger
        bg="#f0f8ff" // Light gray background
        borderRadius="md" // Rounded corners
        borderWidth={1} // Side border width
        borderColor="black" // Border color
        boxShadow="md" // Add a shadow
        // minWidth="100px"
        width="100%"
        maxWidth={{ base: "100%", md: "600px" }} // Full width on small screens, max of 620px on medium+larger
        minHeight={{ base: "200px", md: "300px" }} // 200px on small screens, 300px on medium+larger
        margin="0 auto" // Center the Box
        color="black" //Ensure text is visible (adjust as needed)
      >

        {/* Main Flex container to hold all four logics */}
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on small screens, horizontally on medium+
          mb={{ base: 0, md: 0 }}
          alignItems="stretch"
          justify="space-between" // Ensure space between items
          mt={5}
        >
          {/* Select from and Input Text felx container */}
          <Flex direction="column" flex={1}  mr={{ base: 0, md: 4 }}>
            {/* Box for the "Translate from" label */}
            <Box mb={1} flex="1"  width={{ base: "100%", md: "150px" }}>
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
              width={{ base: "100%", md: "250px" }} // Full width on small screens, 250px on medium+
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
        {/*End of Select from and Input Text felx container */}


          <Box mx={{ base: 0, md: 4 }} /> {/* Responsive margin: 0 on small screens, 4 on medium+ */}

             {/* Translate to and Translated text felx container */}
          <Flex direction="column" flex={1}  >
            {/* Box for the "Translate to" label */}
            <Box mb={1} flex="1" width={{ base: "100%", md: "150px" }}>
              <LanguageSelect
                label="Translate to:"
                selectedLanguage={targetLang}
                onLanguageChange={(e) => setTargetLang(e.target.value)}
              />
            </Box>

            {/* Box for the Translated Text */}
            <Box
              flex="2"
              width={{ base: "100%", md: "250px" }} // Full width on small screens, 250px on medium+
              minHeight="300px"
              boxSizing="border-box"
            >
              <TranslatedText translatedText={translatedText} />
            </Box>
          </Flex>
        </Flex>
        {/* End of Translate to and Translated text felx container */}

        {/* Translation Logic */}
        <TranslationLogic
          text={text}
          sourceLang={sourceLang}
          targetLang={targetLang}
          onTranslated={handleTraslationResult}
        />
        
        {/* Refresh Button */}
        <RefreshButton onRefresh={handleRefresh} isLoading={isLoading} 
        />
      </Box>
    </>
  );
};

export default App;
