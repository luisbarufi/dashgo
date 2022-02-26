import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Luis Barufi</Text>
      <Text color="gray.300" fontSize="small">
        luisbarufi@gmail.com
      </Text>
    </Box>

    <Avatar
      size="md"
      name="Luis Barufi"
      src="https://github.com/luisbarufi.png"
    />
  </Flex>
  );
}
