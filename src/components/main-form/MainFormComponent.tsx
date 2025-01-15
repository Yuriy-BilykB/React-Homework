import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../../validators/car.validator.ts";
import {getAllCars} from "../../services/carService.ts";
import {saveCar} from "../../services/carService.ts";

interface IFormProps {
    brand: string;
    price: number;
    year: number;
}

const MainFormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}, reset}
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(carValidator)});
    const customHandler = async (formDataProps: IFormProps) => {

        await saveCar(formDataProps);
        reset();
        const cars = await getAllCars();
        console.log('Оновлений список машин:', cars);
    }
    return (<div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label htmlFor="">
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type={'number'} {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default MainFormComponent;