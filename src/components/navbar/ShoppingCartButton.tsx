import React from "react";

const ShoppingCartButton = () => {
  return (
    <button type="button" className="text-[1.2rem] text-dark-gray">
      <img
        src="src/assets/icon-shopping-cart.svg"
        alt=""
        className="w-full h-[3.2rem] mb-2 pr-[0.3rem]"
      />
      장바구니
    </button>
  );
};

export default ShoppingCartButton;
