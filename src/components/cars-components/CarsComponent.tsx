import {useState, useEffect} from "react";
import {ICar} from "../../modules/ICar.ts";
import {getCars} from "../../api-service/api-service.tsx";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars()
            .then((data) => {
                console.log(data)
                setCars(data);
            })

    }, [])
    return (
        cars.map((car) => (<CarComponent key = {car.id} car={car}/>))
    );
};
export default CarsComponent