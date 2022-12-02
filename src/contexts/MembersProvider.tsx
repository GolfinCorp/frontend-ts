import { createContext, useState } from 'react';
import { MemberListT, PropChildrenT } from '@/types';
type PropsT = PropChildrenT;

export const MembersContext = createContext<MemberListT | {}>({});
const MembersProvider = ({ children }: PropsT) => {
	const [members, setMembers] = useState<MemberListT | null>(null);

	const data = {
		members,
		setMembers
	};

	return (
		<MembersContext.Provider value={data}>{children}</MembersContext.Provider>
	);
};

export default MembersProvider;
