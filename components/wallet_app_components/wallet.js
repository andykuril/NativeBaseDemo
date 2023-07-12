import React from "react";
import {
  Flex, Center, Text,
  VStack, NativeBaseProvider, Image
} from "native-base";

function Wallet() {

  return (
      <VStack space={2.5} w="100%">

        <Flex pt="3" direction="row" justifyContent="space-between" >
          <Flex alignItems="center" w="50%" direction="row" mb="2.5" mt="1.5" _text={{
            color: "coolGray.800"
          }}>
            <Image ml="3" source={require("../../assets/wallet.png")} alt="wallet" />
            <Text ml="2">Wallet 1</Text>
          </Flex>

          <Flex alignItems="center" w="50%" direction="row-reverse" mb="2.5" mt="1.5" _text={{
            color: "coolGray.800"
          }}>

            <Image mr="2" source={require("../../assets/three-dots.png")} alt="three-dots" />
            
            <Image mr="4" source={require("../../assets/attachment.png")} alt="attachment" />
            
            <Image mr="4" source={require("../../assets/crypto.png")} alt="crypto" />

          </Flex>
        </Flex>

      </VStack>
)
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center px="3" pt="5">
        <Wallet />
      </Center>
    </NativeBaseProvider>
  );
};
