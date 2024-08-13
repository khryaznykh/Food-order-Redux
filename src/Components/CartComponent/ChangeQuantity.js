const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity (newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const lessQuantity = quantity -1;
        setQuantity(lessQuantity)
    }
    return (
        <div>
            <button onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;