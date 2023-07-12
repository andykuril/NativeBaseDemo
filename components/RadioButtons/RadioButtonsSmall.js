import React from "react";
import { Radio, Stack, Center, NativeBaseProvider, extendTheme } from "native-base";

const RadioButtonsSmall = () => {
  return <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
      <Stack direction={{
      base: "column",
      md: "row"
    }} alignItems={{
      base: "flex-start",
      md: "center"
    }} space={4} w="75%" maxW="300px">
        <Radio value="1" bg="bg.100" size="lg" my={1}>
          Default
        </Radio>
        <Radio value="2" colorScheme="bg.100" size="lg" my={1}>
          Color  
        </Radio>
      </Stack>
    </Radio.Group>;
};

const theme = extendTheme({
    colors: {
      // Add new color
      bg: {
        default: '#637381',
        50: '#DFE3E8',
        100: {
            bg: 'red',
            borderWidth: 2,
            borderColor: 'black',
            height: 20,
            width: 20,   
        },
        150: '#2382F7',
        200: '#007B55',
        250: '#3366FF',
        300: '#1939B7',
        350: '#00B8D9',
      },
    },
  });

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <RadioButtonsSmall />
            </Center>
          </NativeBaseProvider>
        );
    };
    