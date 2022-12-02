import { DrawerBody, DrawerFooter, Box, Divider } from "@chakra-ui/react";
import { useMembers } from "@/hooks";
import Form from "../Form/Form";
import UpdatePassword from "../UpdatePassword";
import DeleteMember from "../MemberDelete/DeleteMember";
import { MemberT } from "@/types";
import { Resolver } from "react-hook-form";

type FieldValues = {
  firstName: string;
  lastName: string;
  membership: number;
};

const MemberDrawer = ({ onClose, id }) => {
  const { updateMember } = useMembers();
  // Event handlers
  const handleSubmit: Resolver<FieldValues> = async (member) => {
    event.preventDefault();
    const updateResponse = await updateMember(member, id);
    if (!updateResponse) return;
    onClose();
  };

  return (
    <>
      <DrawerBody>
        <Form btnContent="Actualizar" submitMember={handleSubmit} />
        <Divider my="5" />
        <Box>
          <UpdatePassword />
        </Box>
      </DrawerBody>
      <DrawerFooter>
        <DeleteMember onClose={onClose} id={id} />
      </DrawerFooter>
    </>
  );
};

export default MemberDrawer;
