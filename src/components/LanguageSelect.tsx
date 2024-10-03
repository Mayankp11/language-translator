import { Box, Select } from '@chakra-ui/react'

interface LanguageSelectProps {
    label : string;
    selectedLanguage : string;
    onLanguageChange : (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({label, selectedLanguage, onLanguageChange}) => {
  return (
    <Box mb={3}>
    <label>{label}</label>
    <Select
       value={selectedLanguage}
       onChange={onLanguageChange}
       size='md'
      mt={1}
    
    >
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="hi">हिंदी</option>
      <option value="mr">मराठी</option>
    </Select>
  </Box>
  )
}

export default LanguageSelect