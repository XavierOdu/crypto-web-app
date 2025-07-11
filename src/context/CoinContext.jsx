import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

   const [allCoin, setAllCoin] = useState([]);
   const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
   })

const fetchAllCoin = async ()=>{
    const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-R77xBh6ADPW6pgKWhbrrJgqb'}
};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
  .then(res => res.json())
  .then(res => setAllCoin(res))
  .catch(err => console.error(err));
}

const contextValue ={
  allCoin, currency, setCurrency,
}

useEffect(()=>{
  fetchAllCoin();
},[currency])

   return(
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
   )

}
export default CoinContextProvider;