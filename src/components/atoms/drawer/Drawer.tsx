import React, { ElementType, RefObject } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { disclosureT } from "@/types";

type PropsT = disclosureT & {
  finalFocusRef: any;
  title: string;
  closeButton: boolean;
  placement: any;
  children: ElementType;
};
const Drawer = ({
  isOpen,
  onClose,
  finalFocusRef,
  title,
  closeButton,
  placement,
  children,
}: PropsT) => {
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        {closeButton && <DrawerCloseButton />}
        {title && <DrawerHeader>{title}</DrawerHeader>}
        {children}
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
