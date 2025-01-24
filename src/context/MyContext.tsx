import {createContext} from "react";

type MyContextType = {
    ThemeColor: boolean,
    changeThemeColor: () => void;
}

export const MyContext = createContext<MyContextType | null>(null)