import React from "react";
import { Box, Image, Text, Heading, Link } from "@chakra-ui/react";

function ProjectCard({ title, description, image }) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.02)", boxShadow: "xl" }}
    >
      <Box w="full" h="12rem" overflow="hidden">
        <Image src={image} alt={title} w="full" h="full" objectFit="cover" loading="lazy" />
      </Box>

      <Box p={4}>
        <Heading as="h3" fontSize="lg" fontWeight="semibold" color="gray.900" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {description}
        </Text>
        <Link href="#" color="blue.600" fontSize="sm" fontWeight="medium" _hover={{ opacity: 0.8 }}>
          See more →
        </Link>
      </Box>
    </Box>
  );
}

export default ProjectCard;
