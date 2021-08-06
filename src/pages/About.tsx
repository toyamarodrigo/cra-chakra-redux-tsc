import { Text } from "@chakra-ui/react";
import React from "react";

import { ComponentOne } from "../components";
import { BasicLayout } from "../layout";

export const About = () => {
  return (
    <BasicLayout>
      <Text fontSize="6xl">ABOUT</Text>
      <Text fontWeight="bold">
        CRA - Javascript - React - Redux - Redux Thunk - React Redux - ChakraUI - React Router -
        Axios
      </Text>
      <ComponentOne />
    </BasicLayout>
  );
};
