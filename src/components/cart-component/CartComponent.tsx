import {ICartProducts} from "../../models/ICart.ts";
import {FC} from "react";
type propsTypeProducts = {
    product: ICartProducts;
}
 const CartComponent: FC<propsTypeProducts> = ({product}) => {
    return (
        <div>
            <img src={product.thumbnail} alt={product.title} width="50" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: ${product.total}</p>
            <p>Discounted Total: ${product.discountedTotal}</p>
        </div>
    );
};

export default CartComponent;