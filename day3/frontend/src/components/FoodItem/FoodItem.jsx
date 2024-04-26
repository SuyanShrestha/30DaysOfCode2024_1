import { React, useContext } from "react";
import "./FoodItem.css";
import { assets, food_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  // add to cart garni bela aba kati ota item chahi add garni vanerw
  // initially tw item add nai garya hunna, so count is zero
  // const [itemCount, setItemCount] = useState(0);

  // tarw useState simply use garda aba harek item in foodlist ko lagi chahi seperate useState hunxa, which is not the best practice. So, useContext instead
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {/* aba count nai zero huda matra + - ko options dekhinu paryo, count 0 huda ta just + vanni icon euta matra hunxa */}
        {!cartItems[id] ? (
          <img
            className="add"
            // onClick={() => setItemCount((prev) => prev + 1)}
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          // aba + - anusar count badhauni dhatauni ko lagi, if 1 itemCount bata ni minux garyo vane feri useState maa chahi 0 store huni vayo ta mathi ko condition satisfy huni vayo !itemCount wala
          <div className="food-item-counter">
            <img
              // onClick={() => setItemCount((prev) => prev - 1)}
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            {/* <p>{itemCount}</p> */}
            <p>{cartItems[id]}</p>
            <img
              // onClick={() => setItemCount((prev) => prev + 1)}
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
          {/* yeta use vaa assets.rating_starts chahi 4star lagako rating garya jaso gareko image matra ho */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
