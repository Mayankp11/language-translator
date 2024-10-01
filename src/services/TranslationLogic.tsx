import axios from "axios";
import { useState } from "react";

interface TranslationProps {
    text: string;
    sourceLang : string;
    targetLang : string;
    onTranslated : (translatedText : string) => void;
}

const TranslationLogic : React.FC<TranslationProps> = ({text, sourceLang,targetLang,onTranslated}) => {
    const [error, setError] = useState<string | null>(null);
    const handleTranslate = async () => {
      //check
      // console.log(import.meta.env.VITE_GOOGLE_API_KEY); // Add this line for debugging

        const apiKey = import.meta.env.VITE_GOOGLE_API_KEY//replace with Google API key
         const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  

         try{
            const response = await axios.post(url, {
                q: text,
                source : sourceLang,
                target : targetLang,
                format : 'text',
            });

         // Safely access the translations array
         const translations = response?.data?.data?.translations;
         if (translations && translations.length > 0) {
             onTranslated(translations[0].translatedText);
             setError(null); // Clear error on successful translation
         } else {
             setError("No translations available");
             onTranslated(''); // Clear translation if no result
         }
     } catch (error) {
      console.error("Error translating text:", error);
      setError('Error translating text'); // Set error message
      onTranslated(''); // Clear the translated text on error
     }
    };

  return (
    <div>
        <button onClick={handleTranslate}>Translate</button>
        {error && <p style={{color : 'red'}}>{error}</p>}
    </div>
    
  )
}

export default TranslationLogic;