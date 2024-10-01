

interface LanguageSelectProps {
    label : string;
    selectedLanguage : string;
    onLanguageChange : (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({label, selectedLanguage, onLanguageChange}) => {
  return (
    <div>
        <label>{label}</label>
        <select value={selectedLanguage} onChange={onLanguageChange}>
            <option value= "en">English</option>
            <option value= "es">Spanish</option>
            <option value= "fr">France</option>
            <option value= "de">Germany</option>
        </select>
    </div>
  )
}

export default LanguageSelect