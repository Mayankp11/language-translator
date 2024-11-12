import React, { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelect from "./components/LanguageSelect";
import TranslationLogic from "./services/TranslationLogic";
import { Box, Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import TranslatedText from "./components/TranslatedText";
import RefreshButton from "./components/RefreshButton";
import AppBackground from "./components/AppBackground";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [sourceLang, setSourceLang] = useState<string>("en");
  const [targetLang, setTargetLang] = useState<string>("es");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleTraslationResult = (translateText: string) => {
    setTranslatedText(translateText);
    setError(""); // Clear any previous error if translation is successful
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setText("");
    setTranslatedText("");
    setSourceLang("en");
    setTargetLang("es");
    setError(""); // Clear error on refresh

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <AppBackground />
      <Heading as="h1" size="4xl" textAlign="center" mb={5} mt={7}>
        <Highlight
          query="Mate"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "green.100",
          }}
        >
          TranslateMate
        </Highlight>
      </Heading>

      <Box
        mt="40px"
        p={{ base: 2, md: 4 }}
        bg="#f0f8ff"
        borderRadius="md"
        borderWidth={1}
        borderColor="black"
        boxShadow="md"
        width="100%"
        maxWidth={{ base: "100%", md: "600px" }}
        minHeight={{ base: "200px", md: "300px" }}
        margin="0 auto"
        color="black"
      >
        {error && (
          <Box bg="red.200" p={2} borderRadius="md" mb={4}>
            <Text color="red.800">{error}</Text>
          </Box>
        )}

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="stretch"
          justify="space-between"
          mt={5}
          mb={{ base: 2, md: 0 }}
        >
          <Flex direction="column" flex={1} mr={{ base: 0, md: 4 }} mb={{ base: 2, md: 0 }}>
            <Box mb={1} flex="1" width={{ base: "100%", md: "150px" }}>
              <LanguageSelect
                label="Translate from:"
                selectedLanguage={sourceLang}
                onLanguageChange={(e) => setSourceLang(e.target.value)}
              />
            </Box>

            <Box
              mb={1}
              flex="2"
              width={{ base: "100%", md: "250px" }}
              minHeight={{ base: "200px", md: "300px" }}
              boxSizing="border-box"
            >
              <TextInput text={text} onTextChange={(e) => setText(e.target.value)} />
            </Box>
          </Flex>

          <Box mx={{ base: 0, md: 4 }} />

          <Flex direction="column" flex={1} mb={{ base: 2, md: 0 }}>
            <Box mb={1} flex="1" width={{ base: "100%", md: "150px" }}>
              <LanguageSelect
                label="Translate to:"
                selectedLanguage={targetLang}
                onLanguageChange={(e) => setTargetLang(e.target.value)}
              />
            </Box>

            <Box
              flex="2"
              width={{ base: "100%", md: "250px" }}
              minHeight={{ base: "200px", md: "300px" }}
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
          onError={(errorMsg) => setError(errorMsg)} // Set error if translation fails
        />

        <RefreshButton onRefresh={handleRefresh} isLoading={isLoading} />
      </Box>
    </>
  );
};

export default App;
