import './App.css'
import {simpsons} from "./data/arraySimpsons.ts";
import CharacterComponent from "./Components/CharacterComponent.tsx";

function App() {
    const { name, surname, age, info, photo } = simpsons[0];
  return (
      <CharacterComponent member={{ name, surname, age, info, photo }}>
          <p>{info}</p>
        </CharacterComponent>
  )
}

export default App