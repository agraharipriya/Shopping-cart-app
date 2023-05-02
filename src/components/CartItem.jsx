import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";


const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return (
    <div className="flex ">
      <div className="flex flex-row justify-center items-center ml-20   gap-10 mt-10 sm:w-[350px] sm:flex-1 sm:gap-4">
        <div className="w-[120px] ml-3 sm:w-[80px]">
          <img src={item.image}/>
        </div>

        <div className="">
          <h1 className="font-semibold text-lg text-left  mb-3   ">{item.title.split(" ").slice(0,6).join(" ")}</h1>

          <h1 className="w-[350px] text-gray-700 font-medium text-[15px] text-left sm:w-40">{item.description.split(" ").slice(0,15).join(" ")+ "..."}</h1><br/>
        
        <div className="flex flex-row justify-between items-center mb-5 mr-3">
          <p className="text-green-600 font-semibold">
           $ {item.price}
          </p>

        <div onClick={removeFromCart} className="rounded-full border  bg-red-400 border-full">
         <FcDeleteDatabase className="w-6 h-6 bg-red-800 rounded-full"/>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
};

export default CartItem;
