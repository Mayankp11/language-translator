import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface FlashcardProps {
  language: string;
  translation: string;
}

const Flashcards: React.FC<FlashcardProps> = ({ language, translation }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box>

    <Card
      bg={isFlipped ? "blue.100" : "gray.200"}
      p={4}
      m={2}
      textAlign="center"
      boxShadow="lg"
      cursor="pointer"
      onClick={handleFlip}
      transition="transform 0.6s"
      h={{ base: "200px", md: "250px" }}
      w={{ base: "150px", md: "200px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      
      >
      <CardBody>
        {isFlipped ? (
          <Text fontSize="xl" fontWeight="bold">
            {translation}
          </Text>
        ) : (
          <>
            <Heading size="md">{language}</Heading>
            <Text fontSize="sm" color="gray.500">
              Tap to translate
            </Text>
          </>
        )}
      </CardBody>
    </Card>
        </Box>
  );
};

export default Flashcards;
