import { FieldValues, UseFormRegister, useForm } from "react-hook-form";
import KrInput from "../../../components/general/krInput/krInput";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export interface TaskDetailsFormProps {
  //openDialog: () => void;
}

const schema = yup.object({
  title: yup.string().max(20).required()
}).required();
type FormData = yup.InferType<typeof schema>;

const TaskDetailsForm = (props: TaskDetailsFormProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  // console.log(watch("exampleRequired"));

  return (
    <form onBlur={(handleSubmit(onSubmit))}>
      <KrInput 
        focus={true}
        name={'title'}
        label={'Task name'}
        errors={errors}
        register={register as unknown as UseFormRegister<FieldValues>}
      />
    </form>
  );
};

export default TaskDetailsForm;