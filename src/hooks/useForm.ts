// exemple of useForm hook
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormData } from '../types/hooks/form';

const useMyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useMyForm;
