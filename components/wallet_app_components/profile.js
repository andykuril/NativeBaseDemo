import React from "react";
import { Text, Flex, Image, Center, NativeBaseProvider } from "native-base";

const Profile = () => {
  return (
    <Flex alignItems="center" direction="row" pl="3">
        <Text mr="3">0x713f....f2a2</Text>
        <Image source={require("../../assets/tabler.png")} alt="tabler" />
      </Flex>
  )
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center px="3">
                <Profile />
            </Center>
          </NativeBaseProvider>
        );
    };
    