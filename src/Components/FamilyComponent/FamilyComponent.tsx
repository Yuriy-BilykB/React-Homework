import './FamilyComponent.css'
import {simpsons} from "../../data/arraySimpsons.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
export const FamilyComponent= () => {
    return (
        <div className="family-container">
            {
                simpsons.map(value => <CharacterComponent item={value}>
                    {value.info}
                </CharacterComponent>)
            }
        </div>
    );
};
export default FamilyComponent;