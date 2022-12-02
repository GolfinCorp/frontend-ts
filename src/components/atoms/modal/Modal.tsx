import { ReactNode } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton
} from '@chakra-ui/react';
import { disclosureT } from '@/types';

type PropsT = disclosureT & {
  title: string;
  closeButton: boolean;
  children: ReactNode;
};
const Modal = ({ isOpen, onClose, title, closeButton, children }: PropsT) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <>
          {title && <ModalHeader>{title}</ModalHeader>}
          {closeButton && <ModalCloseButton />}
          {children}
        </>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
