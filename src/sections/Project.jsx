import React from "react";
import { Box, Grid, Heading, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import imgProjek1 from "../assets/img/myimage.webp";

const MotionBox = motion(Box);

const projects = [
  {
    title: "React Space",
    description:
      "Space themed React components in a React web application with reusable components and animations",
    image: imgProjek1,
  },
  {
    title: "React Infinite Scroll",
    description:
      "A solution to implement infinite scroll with performance support, helping developers to implement in JS and TS",
    image: imgProjek1,
  },
  {
    title: "Photo Gallery",
    description:
      "A cool way of using photo gallery to share and favorite travel photos in a shared source of photos",
    image: imgProjek1,
  },
  {
    title: "Event planner",
    description:
      "A simple application for special events to discover unique events happening in your city with filter",
    image: imgProjek1,
  },
];

export default function Project() {
  return (
    <Box
      as="section"
      bg="#14532D"
      className="container mx-auto"
      color="white"
      py={16}
      px={4}
      id="project"
    >
      <MotionBox
        initial={{ opacity: 0, y: 150, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
      >
        <Container maxW="2xl" textAlign="center">
          <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={8}>
            Featured Projects
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </Grid>
        </Container>
      </MotionBox>
    </Box>
  );
}
