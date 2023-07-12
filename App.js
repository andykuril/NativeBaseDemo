
import React from "react";
import { Flex, Stack, Center, ScrollView, VStack, NativeBaseProvider, extendTheme } from "native-base";
import Wallet from "./components/wallet_app_components/wallet";
import Profile from "./components/wallet_app_components/profile";
import Account from "./components/wallet_app_components/account";
import Footer from "./components/wallet_app_components/footer";
// import SolidSmall from "./components/buttons/Solid/SolidSmall";
// import SolidMedium from "./components/buttons/Solid/SolidMedium";
// import SolidLarge from "./components/buttons/Solid/SolidLarge";
// import OutlineLarge from "./components/buttons/Outline/OutlineLarge";
// import OutlineMedium from "./components/buttons/Outline/OutlineMedium";
// import OutlineSmall from "./components/buttons/Outline/OutlineSmall";
// import DisabledLarge from "./components/buttons/Disabled/DisabledLarge";
// import DisabledMedium from "./components/buttons/Disabled/DisabledMedium";
// import DisabledSmall from "./components/buttons/Disabled/DisabledSmall";
// import RadioButtonsSmall from "./components/RadioButtons/RadioButtonsSmall";

function App() {

  // return <Flex alignItems="center">
  //     <Center>
  //       {/* <RadioButtonsSmall /> */}

  //       {/* <DisabledSmall />
  //       <DisabledMedium />
  //       <DisabledLarge /> */}

  //       <OutlineSmall />
  //       <OutlineMedium />
  //       <OutlineLarge />

  //       {/* <SolidSmall />
  //       <SolidMedium />
  //       <SolidLarge /> */}
  //     </Center>
  //   </Flex>;

  return <ScrollView>
    <VStack >
      <Stack>
        <Center>
          <Wallet />
        </Center>
        <Center>
          <Profile />
        </Center>
        <Center>
          <Account />
        </Center>
        {/* <Center>
          <Footer />
        </Center> */}
        
      </Stack>
    </VStack>
  </ScrollView>;
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="1" py="1">
        <App />
      </Center>
    </NativeBaseProvider>
  );
};
