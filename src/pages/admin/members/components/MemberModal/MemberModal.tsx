import { ModalBody, ModalFooter } from '@chakra-ui/react';
import { useMembers } from '@/hooks';
import { Modal } from '@/components/atoms';
import Form from '../Form/Form';
import { disclosureT } from '@/types';
import { SubmitHandler } from 'react-hook-form';

type fieldsT = {
	firstName: string;
	lastname: string;
	email: string;
	membership: number;
};

type propsT = disclosureT;

const MemberModal = ({ isOpen, onClose }: disclosureT) => {
	const { createMember } = useMembers();
	const submitMember: SubmitHandler<fieldsT> = async (member) => {
		const createRes = await createMember(member);
		if (createRes) {
			onClose();
		}
	};
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={'Agrega un miembro al club'}
			closeButton
		>
			<ModalBody>
				<Form submitMember={submitMember} />
			</ModalBody>
			<ModalFooter />
		</Modal>
	);
};

export default MemberModal;
