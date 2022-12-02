import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type propsT = {
  children: ReactNode;
};
const Layout = ({ children }: propsT) => {
  return <Box maxW="100vw">{children}</Box>;
};

export default Layout;
