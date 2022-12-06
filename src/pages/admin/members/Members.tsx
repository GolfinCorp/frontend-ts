import { useState, useEffect } from 'react';
import { Button, Flex, Box, useDisclosure } from '@chakra-ui/react';
import { useMembers } from '@/hooks';
import { Table } from '@/components/organisms';
import { Searchbar } from '@/components';
import { DateFlex } from '@/components/molecules';
import { MemberList, MemberModal } from './components';
import { MemberT } from '@/types';
import { MemberContextT } from '@/contexts/types.context';
// Constante
const TABLE_HEADERS = ['Nombre', 'Apellido', 'Membresía', 'Estado'];

const Members = () => {
	// variables, estados y hooks
	const [searchMembers, setSearchMembers] = useState<MemberT[]>();
	const [searchTerm, setSearchTerm] = useState('');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getMembers, members } = useMembers();

	// Event handlers
	const handleSearch = () => {
		const searchedResults = members.filter(
			(member: MemberT) =>
				member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
				member.lastname.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setSearchMembers(searchedResults);
	};

	// Resets search term
	const reset = () => {
		setSearchTerm('');
	};

	const handleSearchTerm = (e) => {
		setSearchTerm(e.target.value);
		handleSearch();
	};

	const fetchMembers = async () => {
		await getMembers();
	};
	// Secondary Effects
	useEffect(() => {
		if (members) return;
		fetchMembers();
	}, []);

	return (
		<>
			<DateFlex>
				<Flex
					gap="5"
					align="center"
					justify={{ base: 'space-between', md: 'none' }}
				>
					<Box>
						<Button onClick={onOpen}>Agregar miembro</Button>
					</Box>
					<Searchbar
						searchFunc={handleSearchTerm}
						searchTerm={searchTerm}
						reset={reset}
					/>
				</Flex>
			</DateFlex>
			<Table headers={TABLE_HEADERS}>
				{members && (
					<MemberList
						searchMembers={searchMembers}
						searchTerm={searchTerm}
						members={members}
					/>
				)}
			</Table>
			<MemberModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default Members;
