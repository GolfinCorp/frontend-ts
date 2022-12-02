import { ReactNode } from 'react';
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer
} from '@chakra-ui/react';

type propsT = {
  headers: string[];
  children: ReactNode;
};
const Table = ({ headers, children }: propsT) => {
  return (
    <TableContainer background="brand.50" borderRadius="md">
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={`${header}-${index}`}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
