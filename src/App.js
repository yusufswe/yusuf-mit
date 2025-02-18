import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Project from "./sections/Project";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Hero />
        <Project />
        <Contact />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
