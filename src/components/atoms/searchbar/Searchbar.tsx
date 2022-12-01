import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdSearch, MdCancel } from "react-icons/md";

type PropsT = {
  searchFunc: (e: Event) => void;
  searchTerm: string;
  reset: () => void;
  [index: string]: any;
};

const Searchbar = ({ searchFunc, searchTerm, reset, ...props }: PropsT) => {
  return (
    <InputGroup {...props}>
      {/* eslint-disable-next-line react/no-children-prop */}
      {searchTerm === "" ? (
        <InputLeftElement color="brand.100" pointerEvents={"auto"}>
          <MdSearch color="inherit" />
        </InputLeftElement>
      ) : (
        <InputLeftElement color="brand.100" onClick={reset}>
          <MdCancel />
        </InputLeftElement>
      )}
      <Input
        color="brand.dark"
        onChange={(e) => searchFunc(e)}
        value={searchTerm}
      />
    </InputGroup>
  );
};

export default Searchbar;
