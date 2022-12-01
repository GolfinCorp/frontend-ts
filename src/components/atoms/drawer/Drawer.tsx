import React, { ElementType } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { disclosureT } from "@/types";

type PropsT = disclosureT & {
  finalFocusRef: string;
  title: string;
  closeButton: boolean;
  placement: string;
  children: ElementType;
};
const Drawer = ({
  isOpen,
  onClose,
  finalFocusRef,
  title,
  closeButton,
  placement = "right",
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
