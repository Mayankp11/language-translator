import React, { useState } from 'react'
import TextInput from './components/TextInput';
import LanguageSelect from './components/LanguageSelect';
import './App.css';
import TranslationLogic from './services/TranslationLogic';

const App: React.FC = () => {
    const [text, setText] = useState<string>(''); // user input text
    const [sourceLang, setSourcelang] = useState<string>('en'); // set Source language to english
    const [targetLang, setTargetLang] = useState<string>('es'); // set Target language to spanish
    const [translatedText, setTranslatedText] = useState<string>(''); // Translated Text

    const handleTraslationResult = (translateText: string) => {
        setTranslatedText(translateText);
    };

  return (
    <div className="App">
        <h1> Langauge Translator </h1>
        
        {/* Text Input */}
        <TextInput text={text} onTextChange={ (e) =>
            setText(e.target.value)}/>

        {/* Source Language Selection*/}
        <LanguageSelect
        label="Translate from:"
        selectedLanguage={sourceLang}
        onLanguageChange={(e) => setSourcelang(e.target.value)}
        />

        {/* Target language Selection */}
        <LanguageSelect
        label="Translate to:"
        selectedLanguage={targetLang}
        onLanguageChange={(e) => setTargetLang(e.target.value)}
        />

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
      {translatedText ? translatedText : "The translated text will appear here..."}
    </div>
    </div>
  )
}

export default App