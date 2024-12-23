import { createContext, useState} from "react";
import { products } from "../assets/assets";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

export const ShopContextProvider = ({children} ) => {
  // const [data, Setdata] = useState(products);

    const currency = '$'
    const delivery_fees = 10;
    const [search , setSearch] = useState('');
    const [showsearch , setShowSearch] = useState(false);
    const [cartItems ,setCartitems] = useState({});

    const addToCart = async (itemId,size) => {
      
      if(!size){
        toast.error('Select Product Size')
      }

        let cartData = structuredClone(cartItems);

          if (cartData[itemId]) {
            if (cartData[itemId][size]) {
               cartData[itemId][size] += 1;
            }
            else {
              cartData[itemId][size] = 1 ;
            }
          }
          else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
          }
          setCartitems(cartData);
      }

      const getCount = () =>{
          let cartCount = 0;

          for (const items in cartItems) {
            for( const item in cartItems[items]){
              try {
                if (cartItems[items][item] > 0){
                    cartCount += cartItems[items][item];
                }
              } catch (error) {
                
              }
            }
          }
          return cartCount;
      }


      // useEffect(()=>{
      //     console.log(cartItems);
          
      // },[cartItems])

  const value = {
      products , currency , delivery_fees ,
      search , setSearch , showsearch , setShowSearch,
      cartItems , addToCart ,getCount
  }
  // console.log(value);

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
