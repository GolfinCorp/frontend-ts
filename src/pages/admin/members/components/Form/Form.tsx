import { Box, Text, Input, Flex, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { MemberT } from '@/types';

type fieldsT = {
  firstName: string;
  lastname: string;
  email?: string;
  membership: number;
};

type PropsT = {
  submitMember: SubmitHandler<fieldsT>;
  btnContent?: string;
};

const Form = ({ submitMember, btnContent = 'Agregar' }: PropsT) => {
  const { register, handleSubmit } = useForm<fieldsT>();

  return (
    <form onSubmit={handleSubmit(submitMember)}>
      <Box my="5">
        <Text>Nombre</Text>
        <Input placeholder="Pedro" {...register('firstName')} />
      </Box>
      <Box my="5">
        <Text>Apellido</Text>
        <Input placeholder="Perez" {...register('lastname')} />
      </Box>
      <Box my="5">
        <Text>Email</Text>
        <Input placeholder="golfer@golfinc.com" {...register('email')} />
      </Box>
      <Box my="5">
        <Text>Membresía</Text>
        <Input placeholder="55522" {...register('membership')} />
      </Box>
      <Flex justifyContent="end">
        <Button type="submit">{btnContent}</Button>
      </Flex>
    </form>
  );
};

export default Form;
