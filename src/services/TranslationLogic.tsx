import axios from "axios";
import { useState } from "react";

interface TranslationProps {
    text: string;
    sourceLang : string;
    targetlang : string;
    onTranslated : (translatedText : string) => void;
}

const TranslationLogic : React.FC<TranslationProps> = ({text, sourceLang,targetlang,onTranslated}) => {
    const [error, setError] = useState<string | null>(null);
    const handleTranslate = async () => {
        const apiKey = 'AIzaSyB3lzPW5nl5Q-T6IWnX5o0Ijwr6MckM06Q'; //replace with Google API key
         const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

         try{
            const response = await axios.post(url, {
                q: text,
                source : sourceLang,
                target : targetlang,
                format : 'text',
            });
            
            const { translations } = response.data;
            onTranslated(translations.translations[0].translatedText);
            setError(null); //Clear error on successful translation
         } catch (error){
            console.error("Error translating text:", error);
            setError('Error translating text'); // set error message
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