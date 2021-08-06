import { Text } from "@chakra-ui/react";
import React from "react";

import { ComponentTwo } from "../components";
import { BasicLayout } from "../layout";

export const Contact = () => {
  return (
    <BasicLayout>
      <Text fontSize="6xl">CONTACT</Text>
      <Text fontWeight="bold">
        CRA - Javascript - React - Redux - Redux Thunk - React Redux - ChakraUI - React Router -
        Axios
      </Text>
      <ComponentTwo />
    </BasicLayout>
  );
};
