import {ICar} from "../../modules/ICar.ts";
import {FC} from "react";
interface CarsListProps {
    cars: ICar[];
}

const CarsComponent: FC<CarsListProps> = ({cars}) => {
    return (
        <div>
            <h2>List of Cars:</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.brand} - {car.price} - {car.year}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarsComponent;