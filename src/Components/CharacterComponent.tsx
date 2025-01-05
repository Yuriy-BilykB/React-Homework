import { FC, ReactNode } from "react";
import "./MyStyles.css";
type CharacterProps = {
    member: {
        name: string;
        surname: string;
        age: number;
        info: string;
        photo: string;
    };
    children?: ReactNode;
};
const CharacterComponent: FC<CharacterProps> = ({ member, children }) => {
    return (
        <div className="character-card">
            <img src={member.photo} alt={member.name} className="character-photo"/>
            <div className="character-info">
                <h1>{member.name} {member.surname} ({member.age} років)</h1>
                <div className="character-children">{children}</div>
            </div>
        </div>
    );
};
export default CharacterComponent;