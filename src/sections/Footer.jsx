import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      className="container mx-auto"
      bg="black"
      color="white"
      fontWeight="semibold"
      fontSize="lg"
      py={4}
      textAlign="center"
    >
      <Text>Yusuf © 2025</Text>
    </Box>
  );
}
