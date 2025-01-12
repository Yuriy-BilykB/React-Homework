import {FC, useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {ApiService} from "../../services/api-service.ts";
import CartComponent from "./CartComponent.tsx";
type CartsComponentProps = {
    userId: number;
};
const CartsComponent: FC<CartsComponentProps> = ({userId}) => {
    const [cart, setCart] = useState<ICart | null>(null);
    useEffect(() => {
        ApiService.getCartUser(userId)
            .then((data) =>{
                console.log(data)
                setCart(data);
            })
    }, [userId])
    if (!cart) {
        return <p>Loading...</p>;
    }
    if (!cart.products || cart.products.length === 0) {
        return <p>No products in the cart.</p>;
    }
    return (
        <div>
            {cart.products.map((product) => (
                <CartComponent key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CartsComponent;