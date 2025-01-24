import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightBranchA = () => {
    const context = useContext(MyContext);
    if (!context) {
        return <p>Контекст не знайдено!</p>;
    }
    const { ThemeColor } = context;
    return (
        <div style={{ backgroundColor: ThemeColor ? "black" : "white", color: ThemeColor ? "white" : "black" }}>
            Right Branch A
        </div>
    );
};
export default RightBranchA;