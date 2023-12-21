import { ImBin2 } from "react-icons/im";
import SelectQuantity from "./SelectQuantity";
import { useCartContext } from "../Context/CartContext";

const CartItems = ({cart})=>{
    const {removeItem} = useCartContext();
    let stock = 10;
    // const [amount,setAmount]=useState(1);
    const setIncrease =()=>{
        // amount===stock ? setAmount(stock):setAmount(amount+1);
      }
      const setDecrease=()=>{
        // amount===1 ?setAmount(1):setAmount(amount-1);
      }
    return<>
        {
          cart.map(
            (curEle)=>{
                return<div className="grid grid-five-column">
                  <div className="cart-image--name">
                      <img src={curEle.image} alt={curEle.title}/>
                      <div> 
                        <p>{curEle.title}</p>
                        <div className="color-div">
                          <p>COLOR : </p>
                          <div className="color-style" style={{backgroundColor:curEle.color}}></div>
                        </div>
                      </div>
                     
                  </div>
                  <div className="cart-hide price-column">
                      <p>{curEle.price}</p>
                  </div>
                  <div className="quantity-column">
                      <SelectQuantity 
                      amount={curEle.amount} 

                      setDecrease={setDecrease} 
                      setIncrease={setIncrease}>
                      </SelectQuantity>
                  </div>
                  <div className="cart-hide subtotal-column">
                      <p>{curEle.price*curEle.amount}</p>
                  </div>
                  <div className="remove-icon" onClick={()=>{removeItem(curEle.id)}}>
                      <ImBin2></ImBin2>
                  </div>
                </div>;
            }
          )
        }
    </>
}

export default CartItems;