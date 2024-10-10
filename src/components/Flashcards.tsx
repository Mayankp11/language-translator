import { Card, CardBody, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react';

interface FalshcardProps{
    language: string;
    translation: string;
}

const Flashcards: React.FC<FalshcardProps> = ({language,translation}) => {
    const[isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

  return (
    <Card
      bg={isFlipped ? "blue.100" : "gray.200"}
      p={4}
      m={2}
      
      textAlign="center" 
      boxShadow="lg"
      cursor="pointer"
      onClick={handleFlip}
      transition="transform 0.6s"
      transform={isFlipped ? "rotateY(180deg)" : "rotateY(0)"}

      h={{ base: "200px", md: "250px" }} // Height: 200px for smaller screens, 250px for medium+ screens
      w={{ base: "150px", md: "200px" }} // Width: 150px for smaller screens, 200px for medium+ screens
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
  )
}

export default Flashcards;