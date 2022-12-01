import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ContextsProvider from "@/contexts";
import { baseTheme } from "@/services";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Providers: FC<Props> = ({ children }) => {
  return (
    <ContextsProvider>
      <ChakraProvider theme={baseTheme}>{children}</ChakraProvider>
    </ContextsProvider>
  );
};

export default Providers;
