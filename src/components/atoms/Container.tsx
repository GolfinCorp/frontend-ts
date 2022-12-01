import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type PropsT = {
  children: ReactNode;
  [index: string]: any;
};
const Container = ({ children, ...props }: PropsT) => {
  return (
    <Box
      w="100vw"
      px={{ base: "20px", md: "60px", lg: "124px" }}
      py={{ base: "20px", md: "20px", lg: "23px" }}
      {...props}
    >
      {children}
    </Box>
  );
};
export default Container;
