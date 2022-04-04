import { ChakraProvider, Box, Button, Text } from "@chakra-ui/react";

const ItemCount = ({ stock, initial, onAdd, count }) => {
  return (
    <ChakraProvider resetCSS>
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <Button
          variant="solid"
          size="md"
          onClick={() => {
            if (count > initial) {
              onAdd("-");
            }
          }}
        >
          -
        </Button>
        <Text ml={10} mr={10}>
          {count}
        </Text>
        <Button
          variant="solid"
          size="md"
          onClick={() => {
            if (count < stock) {
              onAdd("+");
            }
          }}
        >
          +
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default ItemCount;
