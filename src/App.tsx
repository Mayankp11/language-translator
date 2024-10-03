import React, { useState } from "react";
import TextInput from "./components/TextInput";
import LanguageSelect from "./components/LanguageSelect";
import "./App.css";
import TranslationLogic from "./services/TranslationLogic";
import { Heading, HStack } from "@chakra-ui/react";

const App: React.FC = () => {
  const [text, setText] = useState<string>(""); // user input text
  const [sourceLang, setSourcelang] = useState<string>("en"); // set Source language to english
  const [targetLang, setTargetLang] = useState<string>("es"); // set Target language to spanish
  const [translatedText, setTranslatedText] = useState<string>(""); // Translated Text

  const handleTraslationResult = (translateText: string) => {
    setTranslatedText(translateText);
  };

  return (
    <div className="App">
      <Heading as="h1" size="4xl" noOfLines={1}>
        Traducción
      </Heading>

      {/* Text Input */}
      <TextInput text={text} onTextChange={(e) => setText(e.target.value)} />

      <HStack spacing={4} align="center">
        {/* Translation from */}
        <LanguageSelect
          label="Translate from:"
          selectedLanguage={sourceLang}
          onLanguageChange={(e) => setSourcelang(e.target.value)}
        />
        {/* Translation to */}
        <LanguageSelect
          label="Translate to:"
          selectedLanguage={targetLang}
          onLanguageChange={(e) => setTargetLang(e.target.value)}
        />
      </HStack>

      {/* Translation Logic */}
      <TranslationLogic
        text={text}
        sourceLang={sourceLang}
        targetLang={targetLang}
        onTranslated={handleTraslationResult}
      />

      {/* Display translated text in a box */}
      <h2>Translated Text:</h2>
      <div className="translated-box">
        {translatedText
          ? translatedText
          : "The translated text will appear here..."}
      </div>
    </div>
  );
};

export default App;
