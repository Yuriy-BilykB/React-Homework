import { useContext } from "react";
import { MyContext } from "../../context/MyContext.tsx";

const LeftBranchA = () => {
    const context = useContext(MyContext);
    if (!context) {
        return <p>Контекст не знайдено!</p>;
    }
    const { ThemeColor, changeThemeColor } = context;

    return (
        <div>
            <p>Left Branch A</p>
            <button onClick={changeThemeColor}>
                Змінити тему ({ThemeColor ? "Темна" : "Світла"})
            </button>
        </div>
    );
};

export default LeftBranchA;