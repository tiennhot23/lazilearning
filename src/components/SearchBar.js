'use client';

import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBar() {
  return (
    <Flex
      p={'10'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack width={'xl'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Search
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Wanna learn something?
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <InputGroup>
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
            <Input type="text" name="name" placeholder="Your Name" />
          </InputGroup>
        </Box>
      </Stack>
    </Flex>
  );
}
