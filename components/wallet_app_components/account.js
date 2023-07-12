import React from "react";
import {
    Text, Flex, Select, Box, CheckIcon,
    Center, NativeBaseProvider
} from "native-base";

const Account = () => {
    const [service, setService] = React.useState("Account #1");
    return (
        <Flex alignItems="center" direction="column">
            <Text fontWeight="bold" fontSize="5xl">$100.00</Text>

            <Center>
                <Box maxW="200">
                    <Select
                        fontSize="15"
                        fontWeight="bold"
                        borderRadius="10"
                        selectedValue={service}
                        minWidth="150"
                        accessibilityLabel="Account #1"
                        _selectedItem={{
                            endIcon: <CheckIcon size="3" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Account #1" value="Account #1" />
                        <Select.Item label="Account #2" value="Account #2" />
                    </Select>
                </Box>
            </Center>;
        </Flex>
    )
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center px="3">
                <Account />
            </Center>
        </NativeBaseProvider>
    );
};
