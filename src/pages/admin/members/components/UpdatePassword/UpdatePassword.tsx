import { Box, Text, Input, Flex, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type fieldsT = {
  password: string;
  passwordConfirm: string;
};

type propsT = {
  submitPassword: SubmitHandler<fieldsT>;
};

const UpdatePassword = ({ submitPassword }: propsT) => {
  const { register, handleSubmit } = useForm<fieldsT>();
  return (
    <form onSubmit={handleSubmit(submitPassword)}>
      <Box my="5">
        <Text>Cambiar Contraseña</Text>
        <Input placeholder="Contraseña" {...register('password')} />
      </Box>
      <Box my="5">
        <Input
          placeholder="Confirmar contraseña"
          {...register('passwordConfirm')}
        />
      </Box>
      <Flex justifyContent="end">
        <Button type="submit">Actualizar</Button>
      </Flex>
    </form>
  );
};

export default UpdatePassword;
