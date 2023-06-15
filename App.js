import React from "react";
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import { Switch, HStack, Text } from "native-base";

const Example = () => {
  const [service, setService] = React.useState("");
  return <Center>
    <Box >
      <Select selectedValue={service} minWidth="100%" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>

      <HStack mx="auto" alignItems="center" space={4}>
        <Text>Bluetooth</Text>
        <Switch size="sm" />
      </HStack>
    </Box>
  </Center>;
};


export default () => {
  return (
    <NativeBaseProvider>
      <Center mt="100" px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
