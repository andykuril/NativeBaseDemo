import React from "react";
import { Button, VStack, Center, NativeBaseProvider, extendTheme } from "native-base";

const DisabledMedium = () => {
  return <VStack alignItems="center">
      {["md"].map(size => <Button variant='disabled' bg="bg.550" 
          _text={{
          color: "text.550",
          fontSize: 14,
        }}  
        key={size} size={size} borderRadius="8px">
          Medium
        </Button>)}
    </VStack>;
};

const theme = extendTheme({
  colors: {

    bg: {
      50: 'rgba(145, 158, 171, 0.08)',    
      100: 'rgba(145, 158, 171, 0.24)',
      150: 'rgba(0, 171, 85, 0.16)',
      200: 'rgba(0, 171, 85, 0.32)',
      250: 'rgba(51, 102, 255, 0.16)',
      300: 'rgba(51, 102, 255, 0.32)',
      350: 'rgba(0, 184, 217, 0.16)',
      400: 'rgba(0, 184, 217, 0.32)',
      450: 'rgba(54, 179, 126, 0.16)',
      500: 'rgba(54, 179, 126, 0.32)', 
      550: 'rgba(255, 171, 0, 0.16)',
      600: 'rgba(255, 171, 0, 0.32)',
      650: 'rgba(255, 86, 48, 0.16)',
      700: 'rgba(255, 86, 48, 0.32)',
      750: 'rgba(145, 158, 171, 0.24)',
    },
    text: {
      50: "#FFFFFF",
      100: "#FFFFFF",
      150: "#5BE584",
      200: "#5BE584",
      250: "#84A9FF",
      300: "#84A9FF",
      350: "#61F3F3",
      400: "#61F3F3",
      450: "#36B37E",
      500: "#86E8AB",
      550: "#FFD666",
      600: "#FFD666",
      650: "#FFAC82",
      700: "#FFAC82",
      750: "rgba(145, 158, 171, 0.8)",
    }
  },
});

    export default () => {
        return (
          <NativeBaseProvider theme={theme}>
            <Center flex={1} px="3">
                <DisabledMedium />
            </Center>
          </NativeBaseProvider>
        );
    };
    