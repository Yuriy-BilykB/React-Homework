import { useState } from "react";
import LeftBranch from "./components/LeftBranch/LeftBranch.tsx";
import RightBranch from "./components/RightBranch/RightBranchA.tsx";
import { MyContext } from "./context/MyContext.tsx";

function App() {
    const [ThemeColor, setThemeColor] = useState(false);

    const changeThemeColor = () => {
        setThemeColor((prev) => !prev);
    };

    return (
        <>
            <MyContext.Provider value={{ ThemeColor, changeThemeColor }}>
                <LeftBranch />
                <RightBranch />
            </MyContext.Provider>
        </>
    );
}

export default App;