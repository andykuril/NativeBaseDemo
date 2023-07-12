import React from "react";
import { Button, VStack, Center, NativeBaseProvider, extendTheme } from "native-base";

const SolidLarge = () => {
  return <VStack alignItems="center"> 
  <Button bg="bg.500" 
      _text={{
      color: "text.100",
      fontSize: 15,
    }}  
    width="86px" height="48px" borderRadius="8px">
      Large
    </Button>
</VStack>;
};

const theme = extendTheme({
    colors: {
      // Add new color
      bg: {
        50: '#DFE3E8',
        100: '#C4CDD5',
        150: '#2382F7',
        200: '#007B55',
        250: '#3366FF',
        300: '#1939B7',
        350: '#00B8D9',
        400: '#006C9C',
        450: '#36B37E',
        500: '#1B806A', 
        550: '#FFAB00',
        600: '#B76E00',
        650: '#FF5630',
        700: '#B71D18',
        750: '#919EAB',
      },
      text: {
        50: "#212B36",
        100: "#FFFFFF",
        150: "#919EAB",
      }
    },
  });

    export default () => {
        return (
          <NativeBaseProvider theme={theme}>
            <Center flex={1} px="3">
                <SolidLarge />
            </Center>
          </NativeBaseProvider>
        );
    };
    