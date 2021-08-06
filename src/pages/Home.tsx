import React from "react";
import { Text } from "@chakra-ui/react";

import { BasicLayout } from "../layout";
import { ComponentOne, ComponentTwo } from "../components";

export const Home = () => {
  return (
    <BasicLayout>
      <Text fontSize="6xl">HOME</Text>
      <Text fontWeight="bold">
        CRA - Javascript - React - Redux - Redux Thunk - React Redux - ChakraUI - React Router -
        Axios
      </Text>
      <ComponentOne />
      <ComponentTwo />
    </BasicLayout>
  );
};
