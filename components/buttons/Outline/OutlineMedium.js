import React from "react";
import { Button, VStack, Center, NativeBaseProvider, extendTheme } from "native-base";

const SolidMedium = () => {
  return <VStack alignItems="center">
      {["md"].map(size => <Button variant='outline' bg="bg.700" 
          _text={{
          color: "text.700",
          fontSize: 14,
        }}  
        key={size} size={size} borderRadius="8px"
        borderWidth="1px" borderColor="border.700">
          Medium
        </Button>)}
    </VStack>;
};

const theme = extendTheme({
  colors: {
    // Add new color
    border: {
      50: "rgba(145, 158, 171, 0.32)",
      100: "#212B36",
      150: "rgba(0, 171, 85, 0.48)",
      200: "#2382F7",
      250: "rgba(51, 102, 255, 0.48)",
      300: "#3366FF",
      350: "rgba(0, 184, 217, 0.48)",
      400: "#00B8D9",
      450: "rgba(54, 179, 126, 0.48)",
      500: "#36B37E",
      550: "rgba(255, 171, 0, 0.48)",
      600: "#FFAB00",
      650: "rgba(255, 86, 48, 0.48)",
      700: "#FF5630",
      750: "rgba(145, 158, 171, 0.24)",
    },

    bg: {
          
      100: 'rgba(145, 158, 171, 0.08)',

      200: 'rgba(0, 171, 85, 0.08)',

      300: 'rgba(51, 102, 255, 0.08)',

      400: 'rgba(0, 184, 217, 0.08)',

      500: 'rgba(54, 179, 126, 0.08)', 

      600: 'rgba(255, 171, 0, 0.08)',

      700: 'rgba(255, 86, 48, 0.08)',

    },
    text: {
      50: "#212B36",
      100: "#212B36",
      150: "#2382F7",
      200: "#2382F7",
      250: "#3366FF",
      300: "#3366FF",
      350: "#00B8D9",
      400: "#00B8D9",
      450: "#36B37E",
      500: "#36B37E",
      550: "#FFAB00",
      600: "#FFAB00",
      650: "#FF5630",
      700: "#FF5630",
      750: "rgba(145, 158, 171, 0.8)",
    }
  },
});

    export default () => {
        return (
          <NativeBaseProvider theme={theme}>
            <Center flex={1} px="3">
                <SolidMedium />
            </Center>
          </NativeBaseProvider>
        );
    };
    