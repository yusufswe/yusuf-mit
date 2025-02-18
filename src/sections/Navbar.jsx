"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaStackOverflow } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flex, Button, IconButton } from "@chakra-ui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="container mx-auto fixed z-10 top-0 left-0 right-0">
      <Box bg="black" p={8}>
        <Flex justify="space-between" align="center" px={5} color="white">
          <Flex gap={5} align="center" display={{ base: "none", md: "flex" }}>
            <IconButton
              as="a"
              href="mailto:muhammad.yusuf@merkleinnovation.co.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              icon={<Mail size={30} />}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "blue.400" }}
            />
            <IconButton
              as="a"
              href="https://github.com/yusufswe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<Github size={30} />}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "gray.400" }}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/muhammadyusuf-compsci/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<Linkedin size={30} />}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "blue.500" }}
            />
            <IconButton
              as="a"
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              icon={<FaMedium size={30} />}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "green.400" }}
            />
            <IconButton
              as="a"
              href="https://stackoverflow.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
              icon={<FaStackOverflow size={30} />}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "orange.500" }}
            />
          </Flex>

          <Flex gap={5} display={{ base: "none", md: "flex" }}>
            <Button
              onClick={() => scrollToSection("project")}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "blue.500" }}
              fontSize="lg"
              fontWeight="semibold"
            >
              Project
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="unstyled"
              colorScheme="whiteAlpha"
              _hover={{ color: "green.500" }}
              fontSize="lg"
              fontWeight="semibold"
            >
              Contact
            </Button>
          </Flex>

          <Flex ml="auto" justify="flex-end" display={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="Toggle menu"
              icon={
                <>
                  <span
                    className={twMerge(
                      "absolute  w-3/4 h-0.5 bg-white transition-all duration-300 ease-in-out",
                      isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
                    )}
                  />
                  <span
                    className={twMerge(
                      "absolute  w-3/4 h-0.5 bg-white transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2",
                      isOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={twMerge(
                      "absolute w-3/4 h-0.5 bg-white transition-all duration-300 ease-in-out",
                      isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-1"
                    )}
                  />
                </>
              }
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              colorScheme="whiteAlpha"
            />
          </Flex>
        </Flex>
      </Box>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <Box
              display={{ base: "flex", md: "none" }}
              flexDir="column"
              alignItems="center"
              gap={6}
              py={6}
              bg="blackAlpha.600"
              backdropFilter="blur(12px)"
              color="white"
              shadow="lg"
              roundedBottom="lg"
            >
              <Flex gap={4}>
                <IconButton
                  as="a"
                  href="mailto:muhammad.yusuf@merkleinnovation.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  icon={<Mail size={30} />}
                  variant="unstyled"
                  colorScheme="whiteAlpha"
                  _hover={{ color: "blue.400" }}
                />
                <IconButton
                  as="a"
                  href="https://github.com/yusufswe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  icon={<Github size={30} />}
                  variant="unstyled"
                  colorScheme="whiteAlpha"
                  _hover={{ color: "gray.400" }}
                />
                <IconButton
                  as="a"
                  href="https://www.linkedin.com/in/muhammadyusuf-compsci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  icon={<Linkedin size={30} />}
                  variant="unstyled"
                  colorScheme="whiteAlpha"
                  _hover={{ color: "blue.500" }}
                />
                <IconButton
                  as="a"
                  href="https://medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                  icon={<FaMedium size={30} />}
                  variant="unstyled"
                  colorScheme="whiteAlpha"
                  _hover={{ color: "green.400" }}
                />
                <IconButton
                  as="a"
                  href="https://stackoverflow.com/questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stack Overflow"
                  icon={<FaStackOverflow size={30} />}
                  variant="unstyled"
                  colorScheme="whiteAlpha"
                  _hover={{ color: "orange.500" }}
                />
              </Flex>

              <Flex flexDir="column" alignItems="center" gap={4} w="full">
                <Button
                  onClick={() => scrollToSection("project")}
                  w="160px"
                  colorScheme="blue"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  Project
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  w="160px"
                  colorScheme="green"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  Contact
                </Button>
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
