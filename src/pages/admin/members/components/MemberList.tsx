import { useRef } from 'react';
import { Tr, Td, Badge, Text, Box, useDisclosure } from '@chakra-ui/react';
import { Drawer } from '@/components';
import MemberDrawer from './MemberDrawer/MemberDrawer';
import { MemberT } from '@/types';

type MembersTrPropType = {
	member: MemberT;
};
const MembersTr = ({ member }: MembersTrPropType) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { firstName, lastname, membership, status } = member;
	const drawerTitle = `Modificar ${firstName} ${lastname} / M${membership}`;
	return (
		<>
			<Tr onClick={onOpen}>
				<Td>{firstName}</Td>
				<Td>{lastname}</Td>
				<Td>N°{membership}</Td>
				<Td>
					<Badge variant="success">{status}</Badge>
				</Td>
			</Tr>
			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				placement="right"
				closeButton={true}
				title={drawerTitle}
			>
				<MemberDrawer onClose={onClose} id={member._id} />
			</Drawer>
		</>
	);
};

type memberListPropsT = {
	searchTerm: string;
	searchMembers: [] | null;
	members: [];
};
const MemberList = ({
	searchTerm,
	searchMembers,
	members
}: memberListPropsT) => {
	const createMemberTr = (member: MemberT) => {
		return <MembersTr key={member._id} member={member} />;
	};

	return (
		<>
			{searchTerm !== '' && searchMembers && searchMembers.length <= 0 ? (
				// If there is no search results
				<Box p="5">
					<Text>No hay resultados 😢</Text>
				</Box>
			) : searchTerm !== '' && searchMembers && searchMembers.length > 0 ? (
				searchMembers.map((member) => createMemberTr(member))
			) : (
				// If there is no search term return all members
				members.map((member) => createMemberTr(member))
			)}
		</>
	);
};

export default MemberList;
