import React, { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelect from "./components/LanguageSelect";
import TranslationLogic from "./services/TranslationLogic";
import { Flex, Highlight } from "@chakra-ui/react";
import TranslatedText from "./components/TranslatedText";
import RefreshButton from "./components/RefreshButton";
import AppBackground from "./components/AppBackground";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [sourceLang, setSourceLang] = useState<string>("en");
  const [targetLang, setTargetLang] = useState<string>("es");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTraslationResult = (translateText: string) => {
    setTranslatedText(translateText);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setText("");
    setTranslatedText("");

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Container
      // maxW={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      maxW="100%"
      p={{ base: 2, md: 4, lg: 6 }}
    >
      {/* Nav */}
      <Box
        as="header"
        bg="teal.500"
        p={{ base: 3, md: 4 }}
        color="white"
        textAlign="center"
        // width="100vw"
        position="relative" // Keeps it within the flow of the layout
        left="0" // Ensures it starts at the left of the viewport
        top="0" // Keeps it at the top of the page
      >
        <AppBackground />
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          mb={{ base: 3, md: 5 }}
          mt={{ base: 5, md: 7 }}
        >
          <Highlight
            query="Mate"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "green.100",
            }}
          >
            TranslateMayank
          </Highlight>
        </Heading>
      </Box>

      {/* Main Layout */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr", lg: "1fr" }}
        templateRows="repeat(2, 1fr)"
        gap={0} // Set gap to 0 to remove space between Main and Main2
        mt={{ base: 3, md: 4, lg: 6 }}
      >
        {/* Main */}
        <GridItem>
          <Flex justify="center" align="center" width="100%">
            <Box
              bg="blue.100"
              p={{ base: 4, md: 6, lg: 8 }}
              borderRadius="lg"
              maxW={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}  // Responsive max width
              width="100%"  // Ensure it takes up the full width up to maxW
            >
              {/* Horizontal layout for LanguageSelect components */}
              <Flex gap={4} mt={4} align="center" justify="center">
                <LanguageSelect
                  label="Translate from:"
                  selectedLanguage={sourceLang}
                  onLanguageChange={(e) => setSourceLang(e.target.value)}
                />
                {/* Icon or Logo in between */}
                <RefreshButton
                  onRefresh={handleRefresh}
                  isLoading={isLoading}
                />
                <LanguageSelect
                  label="Translate to:"
                  selectedLanguage={targetLang}
                  onLanguageChange={(e) => setTargetLang(e.target.value)}
                />
              </Flex>
              <Flex gap={2} align="center" justify="center">
                {/* Input box */}
                <TextInput
                  text={text}
                  onTextChange={(e) => setText(e.target.value)}
                />

                {/* Translated box */}
                <TranslatedText translatedText={translatedText} />
              </Flex>

              {/* Translation Logic positioned below the two boxes */}
              <Box mt={4} textAlign="center">
                <TranslationLogic
                  text={text}
                  sourceLang={sourceLang}
                  targetLang={targetLang}
                  onTranslated={handleTraslationResult}
                  onError={() => {}} // Set error if translation fails
                />
              </Box>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default App;
