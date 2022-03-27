import React from "react";
import { ChakraProvider, Box, Button, Text, Container } from "@chakra-ui/react";

const NavBar = () => {
    return (
    <ChakraProvider resetCSS>
      <Box>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Container display="block" m={10} ml={0} mr={200} width={200}>
            <Text>MEGGames</Text>
          </Container>
          <Button variant="solid" size="sm">
            PS4
          </Button>
          <Button variant="solid" size="sm" ml={10} mr={10}>
            PS5
          </Button>
          <Button variant="solid" size="sm">
            XBOX
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
