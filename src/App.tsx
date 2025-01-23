import Users from "./assets/components/Users.tsx";

function App() {
    //В апці рендериться компонента юзерс яка в свою чергу викликає компонент юзер
    console.log('app')
    return (
        <div>
            <Users/>
        </div>
    );
}

export default App;