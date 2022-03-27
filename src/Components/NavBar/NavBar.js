import React from "react";
import { ChakraProvider, Box, Button, Text, Container } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <ChakraProvider resetCSS>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor="#d2d098"
        padding={5}
      >
        <Box textAlign="center">
          <Text>MEGGames</Text>
        </Box>
        <Box>
          <Button variant="solid" size="md">
            PS4
          </Button>
          <Button variant="solid" size="md" ml={5} mr={5}>
            PS5
          </Button>
          <Button variant="solid" size="md">
            XBOX
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
