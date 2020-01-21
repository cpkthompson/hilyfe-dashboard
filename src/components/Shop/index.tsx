import React from "react";
import { TypedShopInfoQuery } from "./query";
import { ShopInfo_shop } from "./types/ShopInfo";

type ShopContext = ShopInfo_shop;

export const ShopContext = React.createContext<ShopContext>(undefined);

export const ShopProvider: React.FC = ({ children }) => (
  <TypedShopInfoQuery>
    {({ data }) => (
      <>
        <ShopContext.Provider value={data ? data.shop : undefined}>
          {children}
        </ShopContext.Provider>
      </>
    )}
  </TypedShopInfoQuery>
);
export const Shop = ShopContext.Consumer;
export default Shop;
