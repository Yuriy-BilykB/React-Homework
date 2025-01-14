import {FormEvent, useState} from "react";
interface IFormProps {
   username: string;
   password: string;
}
const FormComponent = () => {
    const [formState, setFormState] = useState<IFormProps>({
        username: 'foobar',
        password: '1111',
    })
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       let user: {} = {
           username: formState.username,
           password: formState.password
       }
        console.log(user)
    };
    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, [input.name]: input.value});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'name'} value={formState.username} onChange={handleInputChange} />
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default FormComponent;