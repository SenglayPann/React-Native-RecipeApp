import React from 'react';
import { Box, Text, HStack, Input, InputField} from '@gluestack-ui/themed';

const safeM = "$5";

function SearchBar() {
  return (
    <Box m={safeM}>
        <HStack>
          <Input
            variant="rounded"
            size="md"
            width={"$full"}
            >
              <InputField placeholder="Search any recipe"/>
          </Input>
        </HStack>
    </Box>
  );
}

export default SearchBar;
