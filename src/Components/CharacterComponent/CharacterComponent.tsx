import './CharacterComponent.css'
import {ISimpsons} from "../../modules/Simpsons.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: ISimpsons,
    children: ReactNode,
}
export const CharacterComponent= ({item, children}: CharacterComponentProps) => {
    return (
        <div className="character-card">
            <h1>{item.name} {item.surname} {item.age}</h1>
            <img src={item.photo} className="character-photo"/>
            <p>{children}</p>
        </div>
    );
};
export default CharacterComponent;