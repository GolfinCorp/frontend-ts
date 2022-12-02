import { ElementType, ReactNode } from 'react';
import {
	Drawer as ChakraDrawer,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton
} from '@chakra-ui/react';
import { disclosureT } from '@/types';

type PropsT = disclosureT & {
	title: string;
	closeButton: boolean;
	placement: any;
	children: ReactNode;
};
const Drawer = ({
	isOpen,
	onClose,
	title,
	closeButton,
	placement,
	children
}: PropsT) => {
	return (
		<ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<>
					{closeButton && <DrawerCloseButton />}
					{title && <DrawerHeader>{title}</DrawerHeader>}
					{children}
				</>
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
