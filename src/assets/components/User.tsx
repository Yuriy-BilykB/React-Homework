import {FC, memo} from "react";


const User: FC<{ foo: () => void, arr?: number[] }> = memo(({arr}: User) => {
    //Для того щоб компонент Юзер не рендерився при виклику юзефект в компоненті юзерс, ми додали мемо колбек функцію яка ігнорує рендеринг даної компоненти
        console.log('user')

    console.log(arr)

        return (
            <div>

            </div>
        );
})

export default User;