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
    <Box sx={{ perspective: "1000px" }} onClick={handleFlip} cursor="pointer">
      <Card
        position="relative"
        sx={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
          transition: "transform 0.5s ease-in-out",
          height: { base: "200px", md: "250px" },
          width: { base: "150px", md: "200px" },
          cursor: "pointer", // Pointer cursor to indicate interactiveness
          "&:hover": {
            boxShadow: "lg", // Add a box shadow on hover to give feedback
            transform: isFlipped ? "rotateY(180deg) scale(1.05)" : "rotateY(0) scale(1.05)", // Slight scale on hover
          }
        }}
        bg="transparent"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        m={4} //space b/w each card
      >
        {/* Front of the card */}
        <CardBody
          position="absolute"
          sx={{
            backfaceVisibility: "hidden",
          }}
          bg="gray.200"
          p={4}
          h="100%"
          w="100%"
          display={!isFlipped ? "flex" : "none"} // Hide front when flipped
          alignItems="center"
          justifyContent="center"
          flexDirection="column"  // Added flexDirection: column to stack them vertically
        >
          <Heading size="md">{language}</Heading>
          <Text fontSize="sm" color="gray.500">
            Tap to translate
          </Text>
        </CardBody>

        {/* Back of the card */}
        <CardBody
          position="absolute"
          sx={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)", // Rotate back face
          }}
          bg="blue.100"
          p={4}
          h="100%"
          w="100%"
          display={isFlipped ? "flex" : "none"} // Show back when flipped
          alignItems="center"
          justifyContent="center"
         
        >
          <Text fontSize="xl" fontWeight="bold">
            {translation}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Flashcards;
