import React, { useState } from 'react'
import TextInput from './TextInput';
import LanguageSelect from './LanguageSelect';
import './App.css';

const App: React.FC = () => {
    const [text, setText] = useState<string>(''); // user input text
    const [sourceLang, setSourcelang] = useState<string>('en'); // set Source language to english
    const [targetLang, setTargetLang] = useState<string>('es'); // set Target language to spanish

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
    </div>
  )
}

export default App