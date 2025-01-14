import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}
const MainFormComponent = () => {
   const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({
       mode: 'all',
   });

   const customHandler = (formDataProps: IFormProps) => {
       console.log(formDataProps)
   }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('username', {
                    required: {value: true, message: 'name is required'},
                    minLength: {value: 4, message: 'too short name'}
                })}/>
                {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label htmlFor="">
                <input type="text" {...register('password', {
                        required: true,
                        // pattern: {
                        //     value: /\w+/,
                        //     message: 'wrong name'
                        // },
                        minLength: {value: 3, message: 'too short password'},
                        maxLength: {value: 6, message: 'too biggest password'}
                    })}/>
                {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                <input type={'number'} {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1995, message: 'too old date'},
                    max: {value: 2025, message: 'incorrect date'},
                })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default MainFormComponent;