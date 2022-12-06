import { DrawerBody, DrawerFooter, Box, Divider } from '@chakra-ui/react';
import { useMembers } from '@/hooks';
import Form from '../Form/Form';
import UpdatePassword from '../UpdatePassword/UpdatePassword';
import DeleteMember from '../MemberDelete/DeleteMember';
import { SubmitHandler } from 'react-hook-form';
import { MemberT } from '@/types';

type fieldsT = {
	firstName: string;
	lastname: string;
	membership: number;
};

type passwordT = {
	password: string;
	passwordConfirm: string;
};

type propsT = {
	onClose: () => void;
	id: string;
};

const MemberDrawer = ({ onClose, id }: propsT) => {
	const { updateMember } = useMembers();
	// Event handlers
	const handleSubmit: SubmitHandler<fieldsT> = async (member) => {
		const updateResponse = await updateMember(member, id);
		if (!updateResponse) return;
		onClose();
	};

	// const passwordSubmit: SubmitHandler<passwordT> = async (member) => {
	// 	const updateResponse = await updateMember(member, id);
	// 	if (!updateResponse) return;
	// 	onClose();
	// };

	return (
		<>
			<DrawerBody>
				<Form btnContent="Actualizar" submitMember={handleSubmit} />
				<Divider my="5" />
				{/* <Box>
					<UpdatePassword submitPassword={passwordSubmit} />
				</Box> */}
			</DrawerBody>
			<DrawerFooter>
				<DeleteMember onClose={onClose} id={id} />
			</DrawerFooter>
		</>
	);
};

export default MemberDrawer;
