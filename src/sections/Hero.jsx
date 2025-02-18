import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import myPhoto from "../assets/img/myPhoto.webp";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box bg="#2A4365" color="white" minH="100vh" className="container mx-auto">
      <MotionBox
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          minH="100vh"
          textAlign="center"
          px={6}
        >
          <Box
            w="12rem"
            h="12rem"
            mb={6}
            borderRadius="full"
            overflow="hidden"
            border="4px solid rgba(255, 255, 255, 0.8)"
            boxShadow="0px 4px 20px rgba(255, 255, 255, 0.2)"
          >
            <Image src={myPhoto} alt="Yusuf" w="full" h="full" objectFit="cover" />
          </Box>

          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.300, blue.500)"
            bgClip="text"
            textShadow="lg"
          >
            Hello, I am Yusuf
          </Heading>

          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="semibold" color="gray.300" mt={4}>
            A frontend developer <br />
            <Text as="span" color="blue.400" fontWeight="medium">
              specialized in React
            </Text>
          </Text>
        </Flex>
      </MotionBox>
    </Box>
  );
}
