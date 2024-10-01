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
        targetlang={targetLang}
        onTranslated={handleTraslationResult}
        />

        {/* Display Translated result */}
        <h2>Translated text:</h2>
        <p>{translatedText}</p>
    </div>
  )
}

export default App