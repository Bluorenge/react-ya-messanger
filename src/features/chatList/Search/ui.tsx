import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

export const Search = () => {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
            </InputLeftElement>

            <Input
                type="text"
                placeholder="Search"
                pl={10}
            />
        </InputGroup>
    );
};
