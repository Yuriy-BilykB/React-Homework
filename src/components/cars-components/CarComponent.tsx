import {ICar} from "../../modules/ICar.ts";
import {FC} from "react";
type PropsTypeCar = {
    car: ICar
}
const CarComponent: FC<PropsTypeCar> = ({car}) => {
    return (
        <div>
            <p>
                <strong>Brand:</strong> {car.brand} | <strong>Price:</strong> ${car.price}
            </p>
        </div>
    );
};
export default CarComponent;